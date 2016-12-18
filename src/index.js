import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import Navbar from './components/Navbar'
import SplashPage from './pages/SplashPage'

const App = ({ children }) =>
  <div>
    <Navbar/>
    {children}
  </div>

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SplashPage}/>
    </Route>
  </Router>, document.getElementById('root'))
