import React, { Component } from "react"

import "./App.css"
import UserContainer from "../containers/UserContainer"
import PageContainer from "../containers/PageContainer"

export default class App extends Component {
  render() {
    // const { name, surname, age } = this.props.user

    return (
      <div className="row">
        <header className="App-header">
          <h1 className="App-title">Мои фото</h1>
        </header>
        <UserContainer />
        <PageContainer />
      </div>
    )
  }
}
