/*eslint-disable */
export const ping = store => next => action => {
  console.log(`next: ${next} action:`)
  console.log(action)
  return next(action)
}
/*eslint-enable */
