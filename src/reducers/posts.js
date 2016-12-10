/**
 * Created by timur on 12/10/16.
 */

import { SET_VISIBILITY_FILTER, ADD_TODO } from '../actions/posts'

export default function posts(state = {}, action) {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })

    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })

    default:
      return state
  }
}
