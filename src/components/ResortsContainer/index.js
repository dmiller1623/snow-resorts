import React from 'react'
import Resorts from '../Resorts'

const ResortsContainer = ({ steamboat }) => {

  return (
    <div>
      <Resorts steamboatWeather={steamboat}></Resorts>
    </div>
  )
}

export default ResortsContainer