import React, { Component } from "react"
import PropTypes from "prop-types"

export default class index extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  onLogBtnClick = () => {
    this.props.handleLogin()
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
          // onClick={this.onLogBtnClick}
        ></div> */}
        <button className="btn" onClick={this.onLogBtnClick}>
          Вход через FB
        </button>
        {userFetchStatus ? <p>Loading...</p> : <p>Привет, {name} !</p>}
        {error ? <p>Error :( </p> : null}
      </div>
    )
  }
}
