import React, { Component } from "react"
import { connect } from "react-redux"

import User from "./User"
import Page from "./Page"

import "./App.css"

class App extends Component {
  render() {
    // const { name, surname, age } = this.props.user
    const { name } = this.props.user
    const { year, photos } = this.props.page
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <User name={name}></User>
        <Page year={year} photos={photos}></Page>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page,
  }
}

export default connect(mapStateToProps)(App)
