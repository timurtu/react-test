/**
 * Created by timur on 12/18/16.
 */

import React from 'react'

const UnauthNav = () =>
  <nav style={{
    height: '3em',
    padding: '1em',
    backgroundColor: 'whitesmoke'
  }}>
    <div style={{
      float: 'left' }}>
      <div>Nav Icon</div>
      <div>Search bar</div>
    </div>
  </nav>

export default class extends React.Component {

  render() {
    return (
      <div>
        <UnauthNav/>
      </div>
    )
  }
}
