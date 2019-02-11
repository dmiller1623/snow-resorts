import React from 'react'
import Resorts from '../Resorts'

const ResortsContainer = (steamboat) => {
  console.log(steamboat.steamboat.weather)

  return (
    <div>
      <Resorts steamboatWeather={steamboat}></Resorts>
    </div>
  )
}

export default ResortsContainer