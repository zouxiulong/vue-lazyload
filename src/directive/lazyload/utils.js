export function getScrollParent(el) {
  let _parent = el.parentNode

  while (_parent) {
    const styleOverflow = getComputedStyle(_parent)["overflow"]
    if (/(scroll)|(aotu)/.test(styleOverflow)) {
      return _parent
    }
    _parent = _parent.parentNode
  }
}

export function imgLoad(src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = reject
    })
}
