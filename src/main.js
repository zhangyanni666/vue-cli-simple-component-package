// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Base64 from './assets/js/base64'
import '../static/UE/ueditor.config'
import '../static/UE/ueditor.all.min'
import '../static/UE/lang/zh-cn/zh-cn'
import '../static/UE/ueditor.parse.min'
import GlobalCss from './components/globalCss'
import './assets/iconfont/iconfont.css';
import UICmpt from './install';
import cmpt from './index';
const GlobalCssConstructor = Vue.extend( GlobalCss );
new GlobalCssConstructor().$mount();
Vue.config.productionTip = false;
Vue.use(UICmpt);
Vue.use(cmpt);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
