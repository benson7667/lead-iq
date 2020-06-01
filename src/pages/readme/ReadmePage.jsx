import React, { Component } from 'react'
import { bool, func, object, string } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'
import './styles.less'

class ReadmePage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { userId, repoId },
      },
    } = this.props

    if (userId && repoId) {
      this.props.getMarkdownContent({ userId, repoId })
    }
  }

  render() {
    const { isLoadingGetReadmeMarkdown, readmeMarkdown } = this.props

    if (isLoadingGetReadmeMarkdown) {
      return <div>loading...</div>
    }

    return (
      <div className='markdown-container'>
        <div className='markdown-body'>
          <ReactMarkdown source={readmeMarkdown} />
        </div>
      </div>
    )
  }
}

ReadmePage.propTypes = {
  getMarkdownContent: func.isRequired,
  isLoadingGetReadmeMarkdown: bool.isRequired,
  match: object,
  readmeError: object,
  readmeMarkdown: string,
}

export default ReadmePage
