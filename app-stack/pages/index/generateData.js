import moment from 'moment/min/moment-with-locales';
import weatherStatusArray from '../../files/weather-data/xiaomi_weather_status';

moment.locale('zh-cn');
// 获取今天天气状态
const getTodayWeatherState = currentWeatherCode => weatherStatusArray.weatherinfo.find(obj => Number(obj.code) === Number(currentWeatherCode)).wea;
// 获取今天空气质量
const getTodayAqi = aqi => ({
  value: aqi.aqi,
  suggest: aqi.suggest,
  details: aqi,
});
// 获得每小时的状况
const generateHourly = (originData) => {
  const { aqi, weather, wind } = originData;
  const { value, unit } = originData.temperature;
  const allData = value.map((obj, index) => {
    const curHour = (new Date()).getHours();
    let time = curHour + index;
    if (time >= 24) {
      time -= 24;
    }
    time = `${time}时`;
    const newObj = {
      time,
      unit,
      temperature: obj,
      weather: weather.value[index],
      weatherState: getTodayWeatherState(weather.value[index]),
      wind: wind.value[index],
      aqi: aqi.value[index],
    };
    return newObj;
  });
  return allData;
};
// 获取每日天气
const generateDaily = (originData) => {
  const {
    aqi, weather, wind, sunRiseSet, precipitationProbability, temperature,
  } = originData;
  const allData = aqi.value.map((obj, index) => {
    const newObj = {
      time: {
        date: moment(sunRiseSet.value[index].from).format('MM/DD'),
        week: moment(sunRiseSet.value[index].from).format('dddd'),
      },
      aqi: obj,
      temperature: temperature.value[index],
      weather: weather.value[index],
      weatherState: {
        from: getTodayWeatherState(weather.value[index].from),
        to: getTodayWeatherState(weather.value[index].to),
      },
      wind: {
        direction: wind.direction.value[index],
        speed: wind.speed.value[index],
        directionunit: wind.direction.unit,
        speedunit: wind.speed.unit,
      },
      sunRiseSet: sunRiseSet.value[index],
      precipitationProbability: precipitationProbability.value[index],
    };
    return newObj;
  });
  return allData;
};
export const getFinalData = (data) => {
  const {
    current, aqi, forecastDaily, forecastHourly, yesterday,
  } = data;

  const FinalData = {
    yesterday,
    today: null,
    hourly: null,
    daily: null,
  };
  // 获取今天天气状态
  FinalData.today = { ...current };
  FinalData.today.weatherState = getTodayWeatherState(current.weather);
  FinalData.today.aqi = getTodayAqi(aqi);
  FinalData.today.pubTime = moment(current.pubTime).format('HH:MM'); // 更新时间转换
  // 获得每小时的状况
  FinalData.hourly = generateHourly(forecastHourly);
  FinalData.daily = generateDaily(forecastDaily);
  return FinalData;
};
