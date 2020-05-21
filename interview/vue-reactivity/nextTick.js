export const nextTick = (function () {
    const callbacks = []
    let pending = false
    let timerFunc
  
    function nextTickHandler () {
      pending = false
      const copies = callbacks.slice(0)
      callbacks.length = 0
      for (let i = 0; i < copies.length; i++) {
        copies[i]()
      }
    }
    if (typeof Promise !== 'undefined' && isNative(Promise)) {
      var p = Promise.resolve()
      var logError = err => { console.error(err) }
      timerFunc = () => {
        p.then(nextTickHandler).catch(logError)
        if (isIOS) setTimeout(noop)
      }
    } else if (!isIE && typeof MutationObserver !== 'undefined' && (
      isNative(MutationObserver) ||
      MutationObserver.toString() === '[object MutationObserverConstructor]'
    )) {
      var counter = 1
      var observer = new MutationObserver(nextTickHandler)
      var textNode = document.createTextNode(String(counter))
      observer.observe(textNode, {
        characterData: true
      })
      timerFunc = () => {
        counter = (counter + 1) % 2
        textNode.data = String(counter)
      }
    } else {
      timerFunc = () => {
        setTimeout(nextTickHandler, 0)
      }
    }
  
    return function queueNextTick ( Function,  Object) {
      let _resolve
      callbacks.push(() => {
        if (cb) {
          try {
            cb.call(ctx)
          } catch (e) {
            handleError(e, ctx, 'nextTick')
          }
        } else if (_resolve) {
          _resolve(ctx)
        }
      })
      if (!pending) {
        pending = true
        timerFunc()
      }
      if (!cb && typeof Promise !== 'undefined') {
        return new Promise((resolve, reject) => {
          _resolve = resolve
        })
      }
    }
  })()