/**
 * Created by timur on 12/18/16.
 */

import React from 'react'
import { Link } from 'react-router'

const NavCollapse = ({ children, target }) =>
  <div className="collapse navbar-collapse" id={target}>
    {children}
  </div>

const NavHeader = ({ children, target }) =>
  <div className="navbar-header">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={`#${target}`}
            aria-expanded="false">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"/>
      <span className="icon-bar"/>
      <span className="icon-bar"/>
    </button>
    {children}
  </div>

const Logo = () =>
  <span>
  <img style={{
    width: '1.5em'
  }} src="res/gwitter-logo-small.png" alt="Gwitter logo"/>
</span>

const Navbar = ({ target }) =>
  <nav className="nav navbar-default">
    <div className="container">
      <NavHeader target={target}>
        <Link to="/" className="navbar-brand">
          <Logo/>
        </Link>
      </NavHeader>

      <NavCollapse target={target}>
        <a className="btn btn-default navbar-btn navbar-right">
          Log in with GitHub
        </a>
      </NavCollapse>
    </div>
  </nav>

export default class extends React.Component {

  render() {
    return (
      <Navbar target="collapse-bar"/>
    )
  }
}
