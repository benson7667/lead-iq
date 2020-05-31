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
        <h1 className='search-title'>Github User Search</h1>
        <div className='search-container'>
          <img
            alt='github-logo'
            className='search-github-logo'
            src={GihubLogo}
          />
          <form className='search-field-wrapper' onSubmit={this.handleSearch}>
            <input
              className='search-field-input'
              onChange={this.handleOnChange}
              placeholder='Search me @benson7667'
              value={value}
            />
            <button className='search-field-btn' onClick={this.handleSearch}>
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
