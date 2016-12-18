/**
 * Created by timur on 12/10/16.
 */

import React from 'react'
import { Link } from 'react-router'

const $ = window.$

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      clientID: 'fcf6d95c161162a50048'
    }
  }

  componentDidMount() {
    this.setState({ loggedIn: true })
  }

  collapse() {
    $('.collapse').collapse('hide')
  }

  render() {
    return (
      <nav style={{
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0
      }} className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#collapse-bar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>

            <Link onClick={this.collapse()} to="/commits" className="navbar-brand">
              <img style={{
                width: '2em',
                position: 'fixed',
                top: 0,
                left: 0
              }} alt="Brand" src="res/gwitter-logo-small.png"/>
            </Link>

            <Link to="/commits" className="navbar-brand">Gwitter</Link>
          </div>

          <div className="collapse navbar-collapse" id="collapse-bar">
            <ul className="nav navbar-nav">
              <li><Link to="/commits">All Commits</Link></li>
              <li><Link to="/user">Profile</Link></li>

              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown
                  <span className="caret"/>
                </a>

                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider"/>
                  <li><a href="#">Separated link</a></li>
                  <li className="divider"/>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>

            <form className="navbar-form">
              <a className="btn btn-default"
                 href={`https://github.com/login/oauth/authorize?scope=user,email&client_id=${this.state.clientID}`}>
                Login with GitHub
              </a>
            </form>
          </div>

        </div>
      </nav>
    )
  }
}
