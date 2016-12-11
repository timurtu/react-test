/**
 * Created by timur on 12/10/16.
 */

import { createStore, combineReducers } from 'redux'
import counter from './reducers/counter'
import posts from './reducers/posts'

const gwitterApp = combineReducers({ counter, posts })

export default createStore(gwitterApp)
