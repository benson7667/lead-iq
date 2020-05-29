import React, { Component } from 'react'

const App = (props) => {
  console.log('NODE_ENV', process.env.NODE_ENV)
  console.log('BUILD_ENV', process.env.BUILD_ENV)

  return (
    <div>
      <span>{process.env.NODE_ENV}</span>
      <span>{process.env.BUILD_ENV}</span>
    </div>
  )
}

export default App
