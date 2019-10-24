export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

export function handleLogin() {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST })
    //eslint-disable-next-line no-undef
    FB.login(
      function(response) {
        // handle the response
        if (response.authResponse) {
          //eslint-disable-next-line no-undef
          FB.api("/me", function(response) {
            console.log(response)
            dispatch({ type: LOGIN_SUCCESS, payload: response.name })
          })
        } else {
          console.log("User cancelled login or did not fully authorize.")
          dispatch({ type: LOGIN_ERROR })
        }
      },
      {
        scope: "email,user_photos",
        return_scopes: true,
      }
    )
  }
}

export function fbLogoutUser() {
  return dispatch => {
    dispatch({ type: LOGOUT_REQUEST })
    //eslint-disable-next-line no-undef
    // FB.getLoginStatus(function(response) {
    //   if (response && response.status === "connected") {

    //   }
    // })
    //eslint-disable-next-line no-undef
    FB.logout(function() {
      document.location.reload()
      dispatch({ type: LOGOUT_SUCCESS })
    })
  }
}
