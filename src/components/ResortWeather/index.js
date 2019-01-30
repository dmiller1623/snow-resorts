import React, { Component } from 'react';
import ResortsContainer from '../ResortsContainer/index.js'
import { getWeather } from '../../utilities/apiCalls'

class ResortWeather extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    this.getCurrentWeather();
  }

  getCurrentWeather = async() => {
   const weather =  await getWeather();
   console.log(weather)
  }

  render() {
    return (
      <div>
        <ResortsContainer></ResortsContainer>
      </div>
    )
  }
}

export default ResortWeather