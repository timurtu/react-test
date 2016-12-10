import 'whatwg-fetch'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }

  componentDidMount() {
    fetch('http://localhost:3000/posts', { method: 'POST' })
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <ul>
            {this.state.posts.map(p => <li key={p.id}>{p.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
