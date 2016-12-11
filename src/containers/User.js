/**
 * Created by timur on 12/11/16.
 */

import 'whatwg-fetch'
import React from 'react'

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { user: {} }
  }

  componentDidMount() {
    fetch('https://api.github.com/emojis')
      .then(res => res.json())
      .then(user => {
        this.setState({ user })
        return user
      })
      .then(console.log)
  }

  render() {
    return (
      <div className='well'>
        <div className="container">
          <h1>User</h1>

          <img src={this.state.user['8ball']} alt="8 ball"/>
          <img src={this.state.user['100']} alt="100"/>
        </div>
      </div>
    )
  }
}
