import 'whatwg-fetch'
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }

  componentDidMount() {
    fetch('http://disorat.com/posts', { method: 'POST' })
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <div className="App-intro">
          <ul>
            {this.state.posts.map(p => <li key={p.id}>{p.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App
