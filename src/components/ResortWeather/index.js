import React, { Component } from 'react';
import ResortsContainer from '../ResortsContainer/index.js'
import { getWeather } from '../../utilities/apiCalls'

class ResortWeather extends Component {
  constructor() {
    super();
    this.state = {
      steamboat: {}
    }
  }

  componentDidMount() {
    this.getCurrentWeather();
  }

  getCurrentWeather = async() => {
   const weather =  await getWeather();
   this.setState({
     steamboat: weather
   })
  }

  render() {
    return (
      <div>
        <ResortsContainer steamboat={this.state.steamboat}></ResortsContainer>
      </div>
    )
  }
}

export default ResortWeather