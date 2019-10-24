import React, { Component } from "react"
import PropTypes from "prop-types"
import style from "./style.module.css"
// import "../App.css"

export default class index extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      filterFor: ""
    }
  }

  onBtnClickGetPhotos = e => {
    this.props.getPhotos()
  }

  photosHandler = e => {
    const photosFromProps = this.props.photos
    const name = e.currentTarget.innerText
    this.setState(() => {
      return {
        ...this.state,
        filterFor: name,
      }
    })
    if (photosFromProps.length === 0) {
      this.props.getPhotosV2()
    } else {
      // const sortPhotos = photos.filter(item => item.albumName === name)
    }
  }

  filterImages = photos => {
    let result = []
    const name = this.state.filterFor
    if (photos.length === 0) return null
    if (name === "ВСЕ ФОТОГРАФИИ") {
      result = photos.map((item) => {
        return item.photos
      }).reduce((a, b) => a.concat(b))

      result = result.map(el => {
        return (
          <img className={style.photo} src={el} key={el} alt="your img"></img>
        )
      })
    } else {

      const sortPhotos = photos.filter(
        item => item.albumName.toUpperCase() === name
      )
      result = sortPhotos[0].photos.map(el => {
        return (
          <img className={style.photo} src={el} key={el} alt="your img"></img>
        )
      })
    }
    // this.setState((state) => {
    //   return {
    //     ...state,
    //     numberOfPhoto: result.length
    //   }
    // })
    // console.log(sortPhotos)
    // console.log(photos)
    // console.log(name)
    return result
  }
  render() {
    const { photos, loading } = this.props
    const currentPhoto = this.filterImages(photos)
    return (
      <>
        <div className="ib page">
          <button className="btn" onClick={this.photosHandler}>
            Все фотографии
          </button>
          <button className="btn" onClick={this.photosHandler}>
            Фото из хроники
          </button>
          <button className="btn" onClick={this.photosHandler}>
            Фото обложки
          </button>
          <button className="btn" onClick={this.photosHandler}>
            Фото профиля
          </button>
          {loading ? (
            <p> Загрузка...</p>
          ) : (
            <p>У тебя {currentPhoto ? currentPhoto.length : photos.length} фото</p>
          )}
        </div>
        <div className={style.photoContainer}>
          {currentPhoto
          //   photos.map(el => {
          //   return (
          //     <img
          //       className={style.photo}
          //       src={el}
          //       key={el}
          //       alt="your img"
          //     ></img>
          //   )
          // })
          }
        </div>
      </>
    )
  }
}
