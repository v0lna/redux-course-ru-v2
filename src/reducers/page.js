import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from "../actions/PageAction"

export const initialState = {
  year: 2018,
  photos: [],
  loading: false,
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
        year: action.payload,
        loading: true,
      }
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.payload,
      }
    default:
      return state
  }
}
