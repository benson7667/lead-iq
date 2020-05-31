import React, { Component } from 'react'
import { func } from 'prop-types'
import GihubLogo from '../../assets/img/github-logo.png'
import './styles.less'

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    const { value } = this.state
    if (value.trim() !== '') {
      this.props.onSearch(value)
    }
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <h1 className='fw3 mb10 tc'>Github User Search</h1>
        <div className='user-search-box shadow1 pa20 tc'>
          <img src={GihubLogo} style={{ width: '70px', height: '70px' }} />
          <form className='flex mt14 mb14' onSubmit={this.handleSearch}>
            <input
              className='w-100 pa12 no-outline f14 b-primary'
              onChange={this.handleOnChange}
              placeholder='Search me @benson7667'
              value={value}
            />
            <button className='btn-default' onClick={this.handleSearch}>
              Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}

SearchBox.propTypes = {
  onSearch: func.isRequired,
}

export default SearchBox
