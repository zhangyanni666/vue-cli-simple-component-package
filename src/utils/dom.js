import Vue from 'vue';

//判断是不是服务器端渲染
const isServer = Vue.prototype.$isServer;

//特殊字符匹配:-_
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;

//对火狐浏览器进行特殊判断
const MOZ_HACK_REGEXP = /^moz([A_Z])/;

//判断IE版本号
const ieVersion = isServer?0:Number(document.documentMode);


/*
* 去掉开头或者结尾的空白字符
* @param string要处理的字符串
* @returns {string} 处理后的字符串
* */
const trim = function(string){
  return (string||'').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}


/*
* 将:-_等转化为驼峰式,如foo-bar变成fooBar
* @param name要处理的字符串
* @returns {*} 处理后的字符串
*
* */
const camelCase = function(name){
  return name.replace(SPECIAL_CHARS_REGEXP,function(_,separator,letter,offset){
    return offset?letter.toUpperCase():letter;//开头的不大写,其余的大写
  }).replace(MOZ_HACK_REGEXP,'Moz$1') //对火狐进行特殊处理
}


/*
* 添加事件监听
* @param element要监听的元素
* @param event 要监听的事件
* @param handler 要执行的函数
*
*
* */
export const on = (function(){
  if(!isServer&&document.addEventListener){ //浏览器环境 并且非IE9一下版本
    return function (element,event,handler){
      if(element && event && handler){
        element.addEventListener(event,handler,false);
      }
    }
  }else{
    return function(element,event,handler){
      if(element && event &&handler){
        element.attachEvent('on'+event,handler);
      }
    }
  }
})();


/*
* 移除事件监听
*@param element监听的元素
* @param event 监听的事件
* @param handler 执行的函数
*
* */
export const off = (function(){
  if(!isServer && document.removeEventListener){
    return function(element,event,handler){
      if(element&&event){
        element.removeEventListener(event,handler,false);
      }
    }
  }else{
    return function(element,event,handler){
      element.detach('on'+event,handler);
    }
  }
})();


/*
* 绑定一次性事件监听
* @param el 要监听的元素
* @param event要监听的事件
* @param fn回调函数
* */
export const once  = function(el,event,fn){
  var listener = function () {
    if(fn){//如果有回调 只执行一次
      fn.apply(this,arguments);
    }
    off(el,event,listener);//移除监听
  };
  on(el,event,listener);
}

/*
*判断是否包含某个类
*@param el要检测的元素
* cls 要检测的类名
* @returns boolean
* */

export function hasClass(el,cls){
  if(!el||!cls) return false; //参数不足
  if(cls.indexOf(' ')!==-1) throw new Error('className should not contain space.');
  if(el.classList){
    return el.classList.contains(cls);
  }else{
    return (' '+el.className+' ').indexOf(' '+cls+' ')>-1;//加前后空格证明是否能完整匹配
  }
}


/*
* 给元素添加某些类
*@param el 要处理的元素
* @param cls 要添加的类
*
* */
export function addClass(el,cls){
  if(!el) return;
  var curClass= el.className,classes = (cls||'').split(' ');
  for(var i=0,j=classes.length;i<j;i++){
    var clsName = classes[i];
    if(!clsName) continue;

    if(el.classList){
      el.classList.add(clsName);
    }else if(!hasClass(el,clsName)){
      curClass+= ' '+clsName;
    }
  }
  if(!el.classList){
    el.className = curClass;
  }
}

/**
 * 给元素移除某些类
 * @param el 要处理的元素
 * @param cls 要移除的类
 */

export function removeClass(el,cls){
  if(!el||!cls) return;
  var classes =cls.split(' ');
  var curClass = " "+el.className+' ';
  for(var i=0,j=classes.length;i<j;i++){
    var clsName = classes[i];
    if(!clsName) continue;
    if(el.classList){
      el.classList.remove(clsName);
    }else if(hasClass(el,clsName)){
      curClass = curClass.replace(' '+clsName+' ',' ');
    }
  }
  if(!el.classList){
    el.className = trim(curClass);
  }

}


/*
*获取样式，分IE9以下和其他两种方式处理
* @type {Function}
* @param element 要获取样式的元素
* @param styleName 要获取的样式名
*
* */

export const getStyle = ieVersion<9?function(element,styleName){
  if(isServer) return; //如果是服务器端渲染直接返回
  if(!element||!styleName) return null; //参数不足
  styleName = camelCase(styleName);//将样式名转换为驼峰式
  if(styleName==='float'){//float特殊处理
    styleName = 'styleFloat';
  }
  try{
    switch ( styleName ) {
      case 'opacity': //opacity特殊处理
        try{
          return element.filters.item('alpha').opacity /100;
        }catch(e){
          return 1.0;
        }
      default:
        return (element.style[styleName]||element.currentStyle?element.currentStyle[styleName]:null);
        //element.currentStyle[styleName] 属性只兼容IE，不兼容谷歌和火狐　且只可以获取样式不能设置样式
    }
  } catch ( e ) {
    return element.style[styleName];
  }
}:function(element,styleName){
  if(isServer) return;
  if(!element||!styleName) return null;
  styleName = camelCase(styleName);
  if(styleName==='float'){
    styleName = 'cssFloat';
  }
  try{
    var computed = document.defaultView.getComputedStyle(element,'');//只兼容火狐和谷歌，不兼容IE
    return element.style[styleName]||computed?computed[styleName]:null;
  }catch(e){
    return element.style[styleName];
  }
}


/**
 * 设置元素的样式
 * @param element 要设置的元素
 * @param styleName 要设置的样式
 * @param value 要设置的值
 */
export const setStyle = function(element,styleName,value){
  if(!element||!styleName) return;

  if(typeof styleName === 'object'){
    for(var prop in styleName){
      if(styleName.hasOwnProperty(prop)){
        setStyle(element,prop,styleName[prop])
      }
    }
  }else{
    styleName = camelCase(styleName);
    if(styleName==='opacity'&&ieVersion<9){
      element.style.filter = isNaN(value)?'':'alpha(opacity='+value*100+')'
    }else{
      element.style[styleName] = value;
    }
  }
};
