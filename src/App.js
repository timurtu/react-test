import React from 'react'
import Feed from './containers/Feed'
import Navbar from './containers/Navbar'
// import Footer from './containers/Footer'

export default () =>
  <div>
    <Navbar/>
    <div style={{ marginTop: '60px' }}></div>
    <Feed/>
    {/*<Footer/>*/}
  </div>
