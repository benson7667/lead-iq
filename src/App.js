import React from 'react'

const App = () => {
  return (
    <div>
      <div>test 123</div>
      <span>{process.env.NODE_ENV}</span>
      <span>{process.env.BUILD_ENV}</span>
    </div>
  )
}

export default App
