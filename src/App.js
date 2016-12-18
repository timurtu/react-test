import React from 'react'
import { Router, IndexRedirect, Route, browserHistory } from 'react-router'
import Navbar from './containers/Navbar'
import Splash from './containers/Splash'
import User from './containers/User'
// import Footer from './containers/Footer'
import Commits from './components/Commits'
import Error from './components/Error'
import Callback from './containers/Callback'

const App = ({ children }) =>
  <div>
    <Navbar/>
    <div style={{ marginTop: '60px' }}></div>
    {children}
  </div>


export default () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/commits"/>
      <Route path="/commits" component={Commits}/>
      <Route path="/splash" component={Splash}/>
      <Route path="/user" component={User}/>
      <Route path="/callback" component={Callback}/>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
