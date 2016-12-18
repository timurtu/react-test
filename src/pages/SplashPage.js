/**
 * Created by timur on 12/18/16.
 */

import React from 'react'
import Button from '../components/Button'

const boxShadow = '0 2px 2px rgba(0, 0, 0, .125)'

const Logo = () =>
  <span>
    <img style={{
      width: '1.75em',
    }} src="/res/gwitter-logo.png" alt="Gwitter logo"/>
  </span>

const Searchbar = () =>
  <span>
    <input style={{
      marginLeft: '2em',
      padding: '.75em',
      borderRadius: '1em',
      border: 'none',
      outline: 'none',
      boxShadow
    }} type="text" placeholder="Search"/>
  </span>

const UnauthNav = () =>
  <nav style={{
    height: '3em',
    padding: '1em',
    backgroundColor: 'whitesmoke',
    boxShadow
  }}>
    <div style={{
      float: 'left'
    }}>
      <Logo/>
      <Searchbar/>
    </div>

    <div style={{
      float: 'right'
    }}>
      <Button color="#fff">Login with GitHub</Button>
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
