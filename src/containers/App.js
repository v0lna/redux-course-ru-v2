import React, { Component } from "react"
import { connect } from "react-redux"

import User from "../components/User"
import Page from "../components/Page"
import { getPhotos } from "../actions/PageAction"

import "./App.css"

class App extends Component {
  render() {
    // const { name, surname, age } = this.props.user
    const { name } = this.props.user
    const { year, photos, loading } = this.props.page
    const { getPhotosAction } = this.props

    return (
      <div className="row">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <User name={name}></User>
        <Page
          year={year}
          photos={photos}
          getPhotos={getPhotosAction}
          loading={loading}
        ></Page>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
