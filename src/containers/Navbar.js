/**
 * Created by timur on 12/10/16.
 */

import React from 'react'

export default () =>
  <nav style={{
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0
  }} className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="#" className="navbar-brand">Gwitter</a>
      </div>

      <div className="collapse navbar-collapse" id="collapse-bar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown
              <span className="caret"/></a>
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
      </div>
    </div>

    <a href="#">
      <img style={{
        width: '4.25em',
        position: 'fixed',
        right: '1em',
        top: '0'
      }} src="/res/gwitter-logo.png" alt="Gwitter logo"/>
    </a>
  </nav>
