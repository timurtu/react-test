/**
 * Created by timur on 12/10/16.
 */

import 'whatwg-fetch'
import React from 'react'
import Posts from '../components/Posts'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }

  componentDidMount() {
    fetch('http://disorat.com/posts', { method: 'POST' })
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <div style={{ overflowWrap: 'break-word' }}>
        <Posts posts={this.state.posts}/>
      </div>
    )
  }
}