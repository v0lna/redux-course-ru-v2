import React, { Component } from "react"
import { connect } from "react-redux"

import User from "./User"
import Page from "./Page"
import { setYear } from "../actions/PageAction"

import "./App.css"

class App extends Component {
  render() {
    // const { name, surname, age } = this.props.user
    const { name } = this.props.user
    const { year, photos } = this.props.page
    const { setYearAction } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <User name={name}></User>
        <Page year={year} photos={photos} setYear={setYearAction}></Page>
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

const mapDispatchToProps = dispatch => {
  console.log(dispatch)
  return {
    setYearAction: year => dispatch(setYear(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
