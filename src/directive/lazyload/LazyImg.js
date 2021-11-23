import { imgLoad } from "./utils"

export default class LazyImg {
    constructor({el, src, options, renderImg}) {
        this.el = el
        this.src = src
        this.options = options
        this.renderImg = renderImg
        this.loaded = false
    }

    checkIsVisible() {
        const { top } = this.el.getBoundingClientRect()
        return top < window.innerHeight * (this.options.preload || 1.3)
    }
    
    loadImg() {
        this.renderImg(this, 'loading')

        imgLoad(this.src).then(() => {
            this.loaded = true 
            this.renderImg(this, 'ok')
        },() => {
            this.loaded = true 
            this.renderImg(this, 'error')
        })
    }
}