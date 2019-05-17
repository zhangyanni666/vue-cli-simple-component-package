import Button from './components/button/index';
import ButtonGroup from './components/button-group/index'
import ElBreadcrumb from './components/breadcrumb/breadcrumb'
import ElBreadcrumbItem from './components/breadcrumb/breadcrumb-item'
const components = [Button,ButtonGroup,ElBreadcrumb,ElBreadcrumbItem];
const install = function(Vue,opts = {}){
  components.forEach(component =>{
    Vue.component(component.name,component)
  })
  Vue.prototype.$ELEMENT = {
    size:opts.size ||'',
    zIndex:opts.index ||2000
  };
}

if(typeof window!=='undefined'&&window.Vue){
  install(window.Vue);
}

export default {
  install,
  Button,
  ButtonGroup,
  ElBreadcrumb,
  ElBreadcrumbItem
};
