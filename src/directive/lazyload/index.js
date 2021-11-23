import Lazyload from './Lazyload'

const VueLazyload = {
    
    install(Vue, options) {

        const LazyCass = Lazyload(Vue)
        const lazyload = new LazyCass(options)
        
        Vue.directive('lazy', {
            bind: lazyload.bindLazy.bind(lazyload)
        })
    }
}



export default VueLazyload