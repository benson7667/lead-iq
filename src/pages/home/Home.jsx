import React, { Component } from 'react'
import { SearchBox } from '../../components'
import './styles.less'

class Home extends Component {
  handleSearch = () => {
    // console.log(query)
  }

  render() {
    return (
      <div className='home-container'>
        <SearchBox onSearch={this.handleSearch} />
      </div>
    )
  }
}

export default Home
