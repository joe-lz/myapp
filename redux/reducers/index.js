import { combineReducers } from 'redux';
import counter from './counter';
import weatherData from './weatherData';
import curCity from './curCity';
import localCitys from './localCitys';

const myApp = combineReducers({
  counter,
  weatherData,
  curCity,
  localCitys,
});

export default myApp;
