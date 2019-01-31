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
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.steamboatWeather.name}</h1>
      </div>
    )
  }
}

export default Resorts 