/**
 * Created by timur on 12/17/16.
 */

import 'whatwg-fetch'
import React from 'react'
import queryString from 'query-string'

export default class extends React.Component {

  componentWillMount() {

    const code = queryString.parse(location.search).code

    fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'User-Agent': 'Gwitter'
      },
      body: JSON.stringify({
        client_id: 'fcf6d95c161162a50048',
        client_secret: 'c7a4911eb48b24fb92e183fdaad0f833421398da',
        code
      })
    })
      .then(console.log)

    this.setState({ code })
  }


  render() {
    return (
      <div className="container">
        <h1>Callback</h1>
        <p>{this.state.code}</p>
      </div>
    )
  }
}
