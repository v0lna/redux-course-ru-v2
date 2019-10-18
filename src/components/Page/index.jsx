import React, { Component } from "react"
import PropTypes from "prop-types"

export default class index extends Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  // constructor(props){
  //   super(props)
  // }

  onBtnClickGetPhotos = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

  render() {
    const { year, photos, loading } = this.props
    return (
      <div className="ib page">
        <button className="btn" onClick={this.onBtnClickGetPhotos}>
          2015
        </button>
        <button className="btn" onClick={this.onBtnClickGetPhotos}>
          2016
        </button>
        <button className="btn" onClick={this.onBtnClickGetPhotos}>
          2017
        </button>
        <button className="btn" onClick={this.onBtnClickGetPhotos}>
          2018
        </button>
        <button className="btn" onClick={this.onBtnClickGetPhotos}>
          2019
        </button>
        <p>{year} год</p>
        {loading ? <p> Загрузка...</p> : <p>У тебя {photos.length} фото</p>}
      </div>
    )
  }
}
