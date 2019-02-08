import React, { Component } from 'react'

class Resorts extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  // componentDidMount = () => {
  //   console.log(this.props)
  // }

  render() {
    console.log(this.props.steamboatWeather.weather[0])
    return (
      <div>
        <h1>{this.props.steamboatWeather.name}</h1>
        {/* {this.props.steamboatWeather.weather.map(status => {
          console.log(status)
          
        })} */}
      </div>
    )
  }
}

export default Resorts 