const CHANGE_YEAR = "changeYear"

export function setYear(year) {
  return {
    type: CHANGE_YEAR,
    payload: year,
  }
}
