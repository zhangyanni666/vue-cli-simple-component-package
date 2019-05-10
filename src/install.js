import ElButton from './components/button/button';
const components = [ElButton];
export default function(Vue){
  components.forEach((component)=>{
    Vue.component(component.name,component)
  })
}
