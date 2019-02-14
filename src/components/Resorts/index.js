import React, { Component } from 'react'
import './styles.css'

class Resorts extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div className='resort-section'>
        <h1 className='resort-name'>{this.props.steamboatWeather.name}</h1>
        <h1>Current: </h1>
        <h1>Low: </h1>
        <h1>High: </h1>
        <h1>Overnight Snowfall: </h1>
        <a className='resort-link' href='https://www.steamboat.com/'>Steamboat Site</a>
      </div>
    )
  }
}

export default Resorts 