import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from "../actions/PageAction"

export const initialState = {
  photos: [],
  loading: false,
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
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
