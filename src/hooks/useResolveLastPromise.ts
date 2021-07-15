import { createImperativePromise, CancelCallback } from "./useImerativePromise"

type ArgumentsType<T> = T extends (...args: infer A) => any ? A : never

export function onlyResolvesLast<T extends (...args: any[]) => any>(
  asyncFunction: T
): T {
  let cancelPrevious: CancelCallback | null = null

  const wrappedFunction = (...args: ArgumentsType<T>) => {
    cancelPrevious && cancelPrevious()
    const initialPromise = asyncFunction(...args)
    const { promise, cancel } = createImperativePromise(initialPromise)
    cancelPrevious = cancel
    return promise
  }

  return wrappedFunction as any // TODO fix TS
}
