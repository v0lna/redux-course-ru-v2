import React from "react"
import { connect } from "react-redux"

import User from "../components/User"
import { handleLogin } from "../actions/UserAction"

function UserContainer({ user: { name, error, userFetchStatus }, login }) {
  console.log(name, error, login)
  return (
    <>
      <User
        name={name}
        userFetchStatus={userFetchStatus}
        error={error}
        handleLogin={login}
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)
