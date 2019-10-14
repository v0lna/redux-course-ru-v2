import React, { Component } from "react"
import PropTypes from "prop-types"

export default class index extends Component {
  static propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired,
  }

  // constructor(props){
  //   super(props)
  // }

  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.setYear(year)
  }

  render() {
    const { year, photos } = this.props
    return (
      <div>
        <button onClick={this.onBtnClick}>2015</button>
        <button onClick={this.onBtnClick}>2016</button>
        <button onClick={this.onBtnClick}>2017</button>
        <button onClick={this.onBtnClick}>2018</button>
        <button onClick={this.onBtnClick}>2019</button>
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      </div>
    )
  }
}
