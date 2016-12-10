/**
 * Created by timur on 12/10/16.
 */

import { INCREMENT, DECREMENT } from '../actions/counter'

export default (state = 0, action) => {

  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
