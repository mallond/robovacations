/**
 * Combined REDUCER
 */

import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import RobotsReducer from './reducer_updateRobots.js';


const rootReducer = combineReducers({
  weather: WeatherReducer,
  robots: RobotsReducer

});

export default rootReducer;
