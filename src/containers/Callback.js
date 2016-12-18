/**
 * Created by timur on 12/17/16.
 */

import 'whatwg-fetch'
import React from 'react'
import queryString from 'query-string'

export default class extends React.Component {

  componentWillMount() {

    const code = queryString.parse(location.search).code

    const body = new FormData()
    body.append('code', code)
    body.append('client_id', 'fcf6d95c161162a50048')
    body.append('client_secret', 'c7a4911eb48b24fb92e183fdaad0f833421398da')
    body.append('state', Math.floor(Math.random() * Date.now()).toString())

    fetch('https://api.github.com/login/oauth/access_token', {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body,
      mode: 'no-cors'
    })
      .then(console.log)
  }


  render() {
    return (
      <div className="container">
        <h1>Callback</h1>
      </div>
    )
  }
}


