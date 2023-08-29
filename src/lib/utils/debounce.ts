/**
 * Creation a debounced function that delays invoking func until after wait milliseconds
 * @param func - the callback function that will be called after the wait time
 * @param wait - in milliseconds
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<Fn extends (...args: any[]) => any>(
  func: Fn,
  wait: number,
) {
  let timeout: ReturnType<typeof setTimeout> | undefined = undefined

  return (...arg: Parameters<Fn>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...arg), wait)
  }
}
