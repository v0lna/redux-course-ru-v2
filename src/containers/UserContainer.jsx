import React from "react"
import { connect } from "react-redux"

import User from "../components/User"
import { handleLogin, fbLogoutUser } from "../actions/UserAction"

function UserContainer({
  user: { name, error, userFetchStatus },
  login,
  logout,
}) {
  return (
    <>
      <User
        name={name}
        userFetchStatus={userFetchStatus}
        error={error}
        handleLogin={login}
        handleLogout={logout}
      ></User>
    </>
  )
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(handleLogin()),
    logout: () => dispatch(fbLogoutUser()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)
