import React, { Component } from "react"
import PropTypes from "prop-types"
import "../App.css"
export default class index extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  onLogBtnClick = () => {
    this.props.handleLogin()
  }

  onLogoutBtnClick = () => {
    this.props.handleLogout()
  }

  render() {
    const { name, userFetchStatus, error } = this.props

    return (
      <div className="ib user">
        {/* <div
          className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="login_with"
          data-auto-logout-link="false"
          data-use-continue-as="false"
        ></div> */}
        <button className="btn btnUser" onClick={this.onLogBtnClick}>
          Вход через FB
        </button>
        <button className="btn btnUser" onClick={this.onLogoutBtnClick}>
          Выход с FB
        </button>
        {userFetchStatus ? <p>Loading...</p> : <p>Привет, {name} !</p>}
        {error ? <p>Error :( </p> : null}
      </div>
    )
  }
}
