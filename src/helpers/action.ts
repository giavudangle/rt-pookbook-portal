export function AbstractActionFactory<T extends string, P>(
  type: T,
  payload: P
): IAction<T, P> {
  return { type, payload }
}
