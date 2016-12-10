/**
 * Created by timur on 12/10/16.
 */

import React from 'react'
import Post from './Post'

export default ({ posts }) =>
  <div>
    {posts.map(p => <Post key={p.id} title={p.title} option1={p.option1}/>)}
  </div>
