import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import LoadRobots from './reducer_loadRobots.js';

console.log('combined reducer loading');

const rootReducer = combineReducers({
  weather: WeatherReducer,
  robots: LoadRobots
});

export default rootReducer;
