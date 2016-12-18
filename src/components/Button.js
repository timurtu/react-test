/**
 * Created by timur on 12/18/16.
 */

import React from 'react'

export default ({ children, color }, props) =>
  <span>
    <button style={{
      padding: '1em',
      margin: '.5em',
      borderRadius: '1em',
      outline: 'none',
      backgroundColor: color,
    }}>
      {children}
    </button>
  </span>
