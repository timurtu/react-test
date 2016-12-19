/**
 * Created by timur on 12/18/16.
 */

import React from 'react'

export default () =>
  <footer className="footer" style={{
    width: '100%',
    height: '60px',
    backgroundColor: '#f5f5f5'
  }}>
    <div className="container">
      <p style={{
        margin: '1.35em'
      }} className="text-muted">
        &copy; Gwitter 2016
        <span className="pull-right">
          Made with <i className="fa fa-heart"/> by <a href="https://github.com/timurtu">Timur Uzel</a>
        </span>
      </p>
    </div>
  </footer>