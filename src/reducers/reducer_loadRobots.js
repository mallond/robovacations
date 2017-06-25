/**
 * Created by dm on 6/24/17.
 */

import { LOAD_ROBOTS} from '../actions/loadRobots.js';


export default function(state = [], action='') {



  switch (action.type) {
    case LOAD_ROBOTS:
      console.log('reducer_loadRobots payload:', action.payload);
      return [ action.payload.data, ...state ];
  }
  return state;
}
