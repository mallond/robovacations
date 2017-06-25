/**
* REDUCER
*/

import { UPDATE_ROBOTS} from '../actions/updateRobots.js';
import _ from 'lodash';

export default function(state = [], action='') {
  switch (action.type) {
    case UPDATE_ROBOTS:
      return [ action.payload.data, ...state ];
  }
  return state;
}
