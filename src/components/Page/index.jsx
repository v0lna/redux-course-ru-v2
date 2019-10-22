import React, { Component } from "react"
import PropTypes from "prop-types"
import style from "./style.module.css"

export default class index extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  // constructor(props){
  //   super(props)
  // }

  onBtnClickGetPhotos = e => {
    this.props.getPhotos()
  }

  render() {
    const { photos, loading } = this.props
    return (
      <div className="ib page">
        <button className="btn" onClick={this.onBtnClickGetPhotos}>
          Загрузить фотографии
        </button>

        {loading ? <p> Загрузка...</p> : <p>У тебя {photos.length} фото</p>}
        <div className={style.photoContainer}>
          {photos.map(el => {
            return <img className={style.photo} src={el} key={el} alt="your img"></img>
          })}
        </div>
      </div>
    )
  }
}
