import React from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import Navbar from './containers/Navbar'
import Splash from './containers/Splash'
import User from './containers/User'
// import Footer from './containers/Footer'

const App = ({ children }) =>
  <div>
    <Navbar/>
    <div style={{ marginTop: '60px' }}></div>
    {children}
  </div>


export default () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute to="/splash"/>
      <Route path="/splash" component={Splash}/>
      <Route path="/user" component={User}/>
    </Route>
  </Router>
