import React, { Component } from 'react'
import { bool, func, object, string } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { DotLoader, EmptyContent } from '../../components'
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

  componentWillUnmount() {
    this.props.cleanMarkdownContent()
  }

  render() {
    const {
      isLoadingGetReadmeMarkdown,
      readmeMarkdown,
      readmeError,
    } = this.props

    if (isLoadingGetReadmeMarkdown) {
      return <DotLoader color='#000' fullPage radius={10} />
    }

    if (!isLoadingGetReadmeMarkdown && readmeError) {
      return (
        <EmptyContent
          subText='This repository do not have a readme file'
          text='No Readme File'
        />
      )
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
  cleanMarkdownContent: func.isRequired,
  getMarkdownContent: func.isRequired,
  isLoadingGetReadmeMarkdown: bool.isRequired,
  match: object,
  readmeError: object,
  readmeMarkdown: string,
}

export default ReadmePage
