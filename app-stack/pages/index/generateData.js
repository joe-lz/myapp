import moment from 'moment/min/moment-with-locales';
import weatherStatusArray from '../../files/weather-data/xiaomi_weather_status';

const icon0 = require('../../files/images/weather/icon0.png');
const icon1 = require('../../files/images/weather/icon1.png');
const icon2 = require('../../files/images/weather/icon2.png');
const icon3 = require('../../files/images/weather/icon3.png');
const icon4 = require('../../files/images/weather/icon4.png');
const icon5 = require('../../files/images/weather/icon5.png');
const icon6 = require('../../files/images/weather/icon6.png');
const icon7 = require('../../files/images/weather/icon7.png');
const icon8 = require('../../files/images/weather/icon8.png');
const icon9 = require('../../files/images/weather/icon9.png');
const icon10 = require('../../files/images/weather/icon10.png');
const icon11 = require('../../files/images/weather/icon11.png');
const icon12 = require('../../files/images/weather/icon12.png');
const icon13 = require('../../files/images/weather/icon13.png');
const icon14 = require('../../files/images/weather/icon14.png');
const icon15 = require('../../files/images/weather/icon15.png');
const icon16 = require('../../files/images/weather/icon16.png');
const icon17 = require('../../files/images/weather/icon17.png');
const icon18 = require('../../files/images/weather/icon18.png');
const icon19 = require('../../files/images/weather/icon19.png');
const icon20 = require('../../files/images/weather/icon20.png');
const icon21 = require('../../files/images/weather/icon8.png'); // "小雨-中雨"
const icon22 = require('../../files/images/weather/icon9.png'); // "中雨-大雨"
const icon23 = require('../../files/images/weather/icon10.png'); // "大雨-暴雨"
const icon24 = require('../../files/images/weather/icon11.png'); // "暴雨-大暴雨"
const icon25 = require('../../files/images/weather/icon12.png'); // "大暴雨-特大暴雨"
const icon26 = require('../../files/images/weather/icon15.png'); // "小雪-中雪"
const icon27 = require('../../files/images/weather/icon16.png'); // "中雪-大雪"
const icon28 = require('../../files/images/weather/icon17.png'); // "大雪-暴雪"
const icon29 = require('../../files/images/weather/icon29.png');
const icon30 = require('../../files/images/weather/icon30.png');
const icon31 = require('../../files/images/weather/icon31.png');
const icon32 = require('../../files/images/weather/icon32.png');
const icon33 = require('../../files/images/weather/icon33.png');
const icon34 = require('../../files/images/weather/icon17.png'); // 若高吹雪
const icon35 = require('../../files/images/weather/icon18.png'); // 轻雾
const icon53 = require('../../files/images/weather/icon53.png');
const icon99 = require('../../files/images/weather/icon99.png'); // 未知

const icon0night = require('../../files/images/weather/icon0night.png');
const icon1night = require('../../files/images/weather/icon1night.png');
const icon2night = require('../../files/images/weather/icon2night.png');
const icon3night = require('../../files/images/weather/icon3night.png');
const icon4night = require('../../files/images/weather/icon4night.png');
const icon5night = require('../../files/images/weather/icon5night.png');
const icon6night = require('../../files/images/weather/icon6night.png');
const icon7night = require('../../files/images/weather/icon7night.png');
const icon8night = require('../../files/images/weather/icon8night.png');
const icon9night = require('../../files/images/weather/icon9night.png');
const icon10night = require('../../files/images/weather/icon10night.png');
const icon11night = require('../../files/images/weather/icon11night.png');
const icon12night = require('../../files/images/weather/icon12night.png');
const icon13night = require('../../files/images/weather/icon13night.png');
const icon14night = require('../../files/images/weather/icon14night.png');
const icon15night = require('../../files/images/weather/icon15night.png');
const icon16night = require('../../files/images/weather/icon16night.png');
const icon17night = require('../../files/images/weather/icon17night.png');
const icon18night = require('../../files/images/weather/icon18night.png');
const icon19night = require('../../files/images/weather/icon19night.png');
const icon20night = require('../../files/images/weather/icon20night.png');
const icon21night = require('../../files/images/weather/icon8night.png'); // "小雨-中雨"
const icon22night = require('../../files/images/weather/icon9night.png'); // "中雨-大雨"
const icon23night = require('../../files/images/weather/icon10night.png'); // "大雨-暴雨"
const icon24night = require('../../files/images/weather/icon11night.png'); // "暴雨-大暴雨"
const icon25night = require('../../files/images/weather/icon12night.png'); // "大暴雨-特大暴雨"
const icon26night = require('../../files/images/weather/icon15night.png'); // "小雪-中雪"
const icon27night = require('../../files/images/weather/icon16night.png'); // "中雪-大雪"
const icon28night = require('../../files/images/weather/icon17night.png'); // "大雪-暴雪"
const icon29night = require('../../files/images/weather/icon29night.png');
const icon30night = require('../../files/images/weather/icon30night.png');
const icon31night = require('../../files/images/weather/icon31night.png');
const icon32night = require('../../files/images/weather/icon32night.png');
const icon33night = require('../../files/images/weather/icon33night.png');
const icon34night = require('../../files/images/weather/icon17night.png'); // 若高吹雪
const icon35night = require('../../files/images/weather/icon18night.png'); // 轻雾
const icon53night = require('../../files/images/weather/icon53night.png');
const icon99night = require('../../files/images/weather/icon99night.png'); // 未知

export const getWeatherImage = (weather, time = 12, sunsetTime = 18, sunriseTime = 6) => {
  const iconArr = [icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25, icon26, icon27, icon28, icon29, icon30, icon31, icon32, icon33, icon34, icon35, icon53, icon99];
  const iconArrNight = [icon0night, icon1night, icon2night, icon3night, icon4night, icon5night, icon6night, icon7night, icon8night, icon9night, icon10night, icon11night, icon12night, icon13night, icon14night, icon15night, icon16night, icon17night, icon18night, icon19night, icon20night, icon21night, icon22night, icon23night, icon24night, icon25night, icon26night, icon27night, icon28night, icon29night, icon30night, icon31night, icon32night, icon33night, icon34night, icon35night, icon53night, icon99night];
  const value = Number(weather);
  // 夜晚
  if (time < sunriseTime || time >= sunsetTime) {
    if (value === 53) {
      return iconArrNight[36];
    }
    if (value === 99) {
      return iconArrNight[37];
    }
    return iconArrNight[value];
  }
  // 白天
  if (value === 53) {
    return iconArr[36];
  }
  if (value === 99) {
    return iconArr[37];
  }
  return iconArr[value];
};

moment.locale('zh-cn');
// 获取今天天气状态
const getWeatherState = currentWeatherCode => weatherStatusArray.weatherinfo.find(obj => Number(obj.code) === Number(currentWeatherCode)).wea;
// 获取今天空气质量
const getTodayAqi = aqi => ({
  value: aqi.aqi,
  suggest: aqi.suggest,
  details: aqi,
});
// 获得每小时的状况
const generateHourly = (originData, forecastDaily) => {
  // 日出日落时间
  const sunsetTime = (new Date(forecastDaily.sunRiseSet.value[0].to)).getHours();
  const sunriseTime = (new Date(forecastDaily.sunRiseSet.value[1].from)).getHours();

  const { aqi, weather, wind } = originData;
  const { value, unit } = originData.temperature;
  const allData = value.map((obj, index) => {
    const curHour = (new Date()).getHours();
    let time = curHour + index;
    if (time >= 24) {
      time -= 24;
    }
    const newObj = {
      time,
      unit,
      temperature: obj,
      weather: weather.value[index],
      weatherState: getWeatherState(weather.value[index]),
      weatherImage: getWeatherImage(weather.value[index], time, sunsetTime, sunriseTime),
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
        date: moment(sunRiseSet.value[index] ? sunRiseSet.value[index].from : Date.now()).format('MM/DD'),
        week: moment(sunRiseSet.value[index] ? sunRiseSet.value[index].from : Date.now()).format('dddd'),
      },
      aqi: obj,
      temperature: temperature.value[index],
      weather: weather.value[index],
      weatherState: {
        from: getWeatherState(weather.value[index] ? weather.value[index].from : 99),
        to: getWeatherState(weather.value[index] ? weather.value[index].to : 99),
      },
      weatherImage: {
        from: getWeatherImage(weather.value[index] ? weather.value[index].from : 99),
        to: getWeatherImage(weather.value[index] ? weather.value[index].to : 99),
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
  FinalData.today.weatherState = getWeatherState(current.weather);
  FinalData.today.aqi = getTodayAqi(aqi);
  FinalData.today.pubTime = moment(current.pubTime).format('HH:MM'); // 更新时间转换
  // 每天
  FinalData.daily = generateDaily(forecastDaily);
  // 获得每小时的状况
  FinalData.hourly = generateHourly(forecastHourly, forecastDaily);
  return FinalData;
};
