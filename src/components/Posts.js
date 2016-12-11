/**
 * Created by timur on 12/10/16.
 */

import React from 'react'

export default class extends React.Component {

  halfSize() {
    return {
      width: '50%',
      whiteSpace: 'normal'
    }
  }

  render() {

    const { posts } = this.props

    return (
      <div className="row">
        {posts.map(p =>
          <div key={p.id} className="col-sm-6">
            <div style={{
              margin: '1em'
            }} className="panel panel-primary">
              <div className="panel-heading">
                <a href="#" className="panel-title">
                  {p.title}
                </a>
              </div>
              <div className="panel-body">
                <p style={{
                  display: 'table',
                  margin: '0 auto'
                }}>{p.option1votes + p.option2votes} votes</p>
                <button style={this.halfSize()} className="btn btn-info">{p.option1}</button>
                <button style={this.halfSize()} className="btn btn-warning pull-right">{p.option2}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}