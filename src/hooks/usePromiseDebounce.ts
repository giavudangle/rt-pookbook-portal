/* global setTimeout, clearTimeout */

const _this = this
interface IDeferred {
  promise: any
  resolve: any
  reject: any
}

function debounce(fn: any, wait = 0, options: any) {
  let lastCallAt: any
  let deferred: IDeferred | null

  let timer: any
  let pendingArgs = [] as any
  return function debounced(...args) {
    const currentWait = getWait(wait)
    const currentTime = new Date().getTime()

    const isCold = !lastCallAt || currentTime - lastCallAt > currentWait

    lastCallAt = currentTime

    if (isCold && options.leading) {
      return options.accumulate
        ? Promise.resolve(fn.call(_this, [args])).then(result => result[0])
        : Promise.resolve(fn.call(_this, ...args))
    }

    if (deferred) {
      clearTimeout(timer)
    } else {
      deferred = defer()
    }

    pendingArgs.push(args!)
    timer = setTimeout(flush.bind(_this), currentWait)

    if (options.accumulate) {
      const argsIndex = pendingArgs.length - 1
      return deferred.promise.then(results => results[argsIndex])
    }

    return deferred.promise
  }

  function flush() {
    const thisDeferred = deferred
    clearTimeout(timer)

    Promise.resolve(
      options.accumulate
        ? fn.call(_this, pendingArgs)
        : fn.apply(_this, pendingArgs[pendingArgs.length - 1])
    ).then(thisDeferred!.resolve, thisDeferred!.reject)

    pendingArgs = []
    deferred = null
  }
}

function getWait(wait) {
  return typeof wait === "function" ? wait() : wait
}

function defer() {
  let rs, rj
  let p = new Promise((resolve, reject) => {
    rs = resolve
    rj = reject
  })

  const deferred: IDeferred = {
    promise: p,
    resolve: rs,
    reject: rj
  }
  return deferred
}

export default debounce
