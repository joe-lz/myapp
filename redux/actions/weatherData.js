import moment from 'moment/min/moment-with-locales';

// import {
//   REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_POSTS, GET_WEATHER_DATA,
// } from '../../constants';
import $api from '../../api';
import {
  getCurCityName, getAqiState, getWindState,
} from '../../App-stack/config';
import { getFinalData } from '../../App-stack/pages/index/generateData';

const handleREQUEST_POSTS = data => ({
  type: 'REQUEST_POSTS',
  data,
});
const handleRECEIVE_POSTS = data => ({
  type: 'RECEIVE_POSTS',
  data,
});
// const handleINVALIDATE_POSTS = data => ({
//   type: 'INVALIDATE_POSTS',
//   data,
// });

export const GET_WEATHER_DATA_FUNC = (data) => {
  const curCity = data;
  return (dispatch) => {
    // 发送前
    dispatch(handleREQUEST_POSTS());
    $api.weather.getWeatherFromXiaomi(curCity.city_num).then((res) => {
      const weatherData = getFinalData(res);
      weatherData.today.aqi.state = getAqiState(weatherData.today.aqi.value);
      weatherData.today.wind.state = getWindState(weatherData.today.wind.speed.value);
      // 生成detail
      weatherData.detail = {};
      weatherData.detail.cityname = getCurCityName(curCity.city_num);
      weatherData.detail.date = moment().format('MM月DD号');
      weatherData.detail.week = moment().format('dddd');
      dispatch(handleRECEIVE_POSTS(weatherData));
    });
  };
};
