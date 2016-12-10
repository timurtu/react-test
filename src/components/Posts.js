/**
 * Created by timur on 12/10/16.
 */

import React from 'react'
// import Post from './Post'

export default ({ posts }) =>
  <div>
    {posts.map(p =>
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src="..." alt={p.title}/>
            <div className="caption">
              <h3>{p.title}</h3>
              <p>{p.option1votes + p.option2votes} votes</p>
              <p>
                <button className="btn btn-info" role="button">{p.option1}</button>
                <button className="btn btn-warning pull-right" role="button">{p.option2}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
