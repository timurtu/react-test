/**
 * Created by timur on 12/10/16.
 */

import React from 'react'
// import Post from './Post'

export default ({ posts }) =>
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
            <img src="..." alt={p.title}/>
            <p>{p.option1votes + p.option2votes} votes</p>
            <button className="btn">{p.option1}</button>
            <button className="btn pull-right">{p.option2}</button>
          </div>
        </div>
      </div>
    )}
  </div>

// {/*<div key={p.id} className="col-sm-6 col-md-4">*/}
// {/*<div className="thumbnail">*/}
// {/*<img src="..." alt={p.title}/>*/}
// {/*<div className="caption">*/}
// {/*<h3>{p.title}</h3>*/}
// {/*<p>{p.option1votes + p.option2votes} votes</p>*/}
// {/*<p>*/}
// {/*<button style={{ maxWidth: '50%' }} className="btn btn-info" role="button">{p.option1}</button>*/}
// {/*<button style={{ maxWidth: '50%' }} className="btn btn-warning pull-right"*/}
// {/*role="button">{p.option2}</button>*/}
// {/*</p>*/}
// {/*</div>*/}
// {/*</div>*/}
// {/*</div>*/}