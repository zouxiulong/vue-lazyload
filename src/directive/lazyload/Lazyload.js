import LazyImg from "./LazyImg"
import { getScrollParent } from "./utils"

function Lazyload(Vue) {
  return class Lazy {
    constructor(options) {
      this.options = options
      this.isAddParentScroll = false
      this.lazyImgPool = []
    }

    bindLazy(el, binding, vnode) {
      Vue.nextTick(() => {

        const _parent = getScrollParent(el)
        if (_parent && !this.isAddParentScroll) {
          this.isAddParentScroll = true
          _parent.addEventListener(
            "scroll",
            this.handleScroll.bind(this),
            false
          )
        }

        const lazyImg = new LazyImg({
          el,
          src: binding.value,
          options: this.options,
          renderImg: this.renderImg,
        })
        this.lazyImgPool.push(lazyImg)
        this.handleScroll()
      })
    }

    handleScroll() {
      this.lazyImgPool.forEach((lazyImg) => {
        if (!lazyImg.loaded) {
          if (lazyImg.checkIsVisible()) {
            lazyImg.loadImg()
          }
        }
      })
    }

    renderImg(lazyImg, state) {
    // console.log(this);
      const {
        el,
        options: { loading, error },
      } = lazyImg
      let src = ""
      switch (state) {
        case "loading":
          src = loading || ""
          break
        case "error":
          src = error || ""
          break
        default:
          src = lazyImg.src
          break
      }
      el.setAttribute("src", src)
    }
  }
}

export default Lazyload
