import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import Robots from './reducer_updateRobots.js';


console.log('combined reducer loading');

const rootReducer = combineReducers({
  weather: WeatherReducer,
  robots: Robots

});

export default rootReducer;
