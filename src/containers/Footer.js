/**
 * Created by timur on 12/10/16.
 */

import React from 'react'

export default () =>
  <footer style={{
    position: 'fixed',
    zIndex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0
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
        <a className="navbar-brand" href="#">Disorat</a>
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
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
        </ul>
      </div>
    </div>
  </footer>
