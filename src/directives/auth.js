import {check} from '../utils/auth'

function install(Vue, options={}) {
  Vue.directive(options.name || 'authI', {
    inserted(el, binding) {
      if(!check(binding.value)){
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  })
}

export default {install}