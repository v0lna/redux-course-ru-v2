import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../actions/UserAction"

export const initialState = {
  name: "Аноним",
  userFetchStatus: false,
  error: false,
  // user: {
  //   name: "Василий",
  //   surname: "Реактов",
  //   age: 27,
  // },
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        userFetchStatus: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        userFetchStatus: false,
        name: action.payload,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: true,
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        userFetchStatus: true,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        name: "Аноним",
        userFetchStatus: false,
      }
    default:
      return state
  }
}
