/**
 * Created by dm on 6/24/17.
 */

import { UPDATE_ROBOTS} from '../actions/updateRobots.js';


export default function(state = [], action='') {

  switch (action.type) {
    case UPDATE_ROBOTS:
      console.log('reducer_upateRobots payload:', action.payload);
      return [ action.payload.data, ...state ];
  }
  return state;
}
