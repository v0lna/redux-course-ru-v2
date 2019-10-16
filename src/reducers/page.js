import { CHANGE_YEAR } from "../actions/PageAction"

export const initialState = {
  year: 2018,
  photos: [],
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_YEAR:
      return {
        ...state,
        year: action.payload,
      }
    default:
      return state
  }
}
