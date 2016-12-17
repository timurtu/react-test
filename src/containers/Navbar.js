/**
 * Created by timur on 12/10/16.
 */

import React from 'react'
import { Link } from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

const $ = window.$

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { loggedIn: false }
  }

  componentDidMount() {
    this.setState({ loggedIn: true })
  }

  collapse() {
    $('.collapse').collapse('hide')
  }

  topRight() {
    return {
      position: 'fixed',
      right: '.5em',
      top: '.5em'
    }
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

            <Link onClick={this.collapse()} to="/" className="navbar-brand">
              <img style={{
                width: '2em',
                position: 'fixed',
                top: 0,
                left: 0
              }} alt="Brand" src="res/gwitter-logo-small.png"/>
            </Link>

            <Link to="/" className="navbar-brand">Gwitter</Link>
          </div>

          <div className="collapse navbar-collapse" id="collapse-bar">
            <ul className="nav navbar-nav">
              <IndexLinkContainer to={{
                pathname: '/foo',
                query: { bar: 'baz' },
                hash: '#the-hash',
              }}>
                <li>
                  <Link>All Commits <span className="sr-only">(current)</span></Link>
                </li>
              </IndexLinkContainer>

              <LinkContainer to={{
                pathname: '/foo',
                query: { bar: 'baz' },
                hash: '#the-hash',
              }}>
                <li>
                  <Link>Profile</Link>
                </li>
              </LinkContainer>

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
              <li>
                {this.state.loggedIn ?
                  <button onClick={() => {
                    this.setState({ loggedIn: false })
                  }} style={{
                    margin: '1em'
                  }} className="btn btn-danger visible-xs">Log out</button> :
                  <button onClick={() => {
                    this.setState({ loggedIn: true })
                  }} style={{
                    margin: '1em'
                  }} className="btn btn-default visible-xs">Log in with GitHub
                  </button>}
              </li>
            </ul>

            <form className="navbar-form">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>

              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>

          {this.state.loggedIn ?
            <button onClick={() => {
              this.setState({ loggedIn: false })
            }} style={this.topRight()} className="btn btn-danger hidden-xs pull-right">Log out</button> :
            <button onClick={() => {
              this.setState({ loggedIn: true })
            }} style={this.topRight()} className="btn btn-default hidden-xs">Log in with GitHub</button>}

        </div>
      </nav>
    )
  }
}
