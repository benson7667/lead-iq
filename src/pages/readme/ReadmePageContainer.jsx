import React from 'react'
import { connect } from 'react-redux'
import ReadmePage from './ReadmePage'
import { Actions } from '../../actions/readmeAction'

const ReadmePageContainer = (props) => <ReadmePage {...props} />

const mapStateToProps = (state) => ({
  readmeMarkdown: state.readme.readmeMarkdown,
  isLoadingGetReadmeMarkdown: state.readme.isLoadingGetReadmeMarkdown,
  readmeError: state.readme.error,
})

const mapDispatchToProps = {
  getMarkdownContent: Actions.GET_README_MARKDOWN_REQUEST,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadmePageContainer)
