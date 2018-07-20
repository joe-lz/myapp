/*
 * @Description 当前App的方法/配置
 * @Author: DongDong
 * @Date: 2018-07-20 14:30:25
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-20 14:31:16
 */


import cityData from '../files/weather-data/citys';
// import provincesData from '../files/weather-data/provinces';

const curCityNumber = 101210101;
const getCurCityName = (cityNumber) => {
  const curCity = cityData.RECORDS.find(obj => Number(obj.city_num) === Number(cityNumber));
  return curCity.name;
};
// 空气质量
const getAqiState = (data) => {
  let state = '爆表';
  if (data <= 500) state = '严重污染';
  if (data <= 300) state = '重度污染';
  if (data <= 200) state = '中度污染';
  if (data <= 150) state = '轻度污染';
  if (data <= 100) state = '良';
  if (data <= 50) state = '优';
  return state;
};
// 风速状态
const getWindState = (data) => {
  let state = '飓风';
  if (data <= 117) state = '飓风式风暴';
  if (data <= 102) state = '强风暴';
  if (data <= 88) state = '狂风';
  if (data <= 74) state = '风暴';
  if (data <= 61) state = '疾风';
  if (data <= 49) state = '强风';
  if (data <= 38) state = '劲风'; // 清新的海风
  if (data <= 28) state = '和风'; // 和缓的风
  if (data <= 19) state = '微风'; // 柔和的微风
  if (data <= 11) state = '微风';
  if (data <= 5) state = '轻风';
  if (data <= 1) state = '无风';
  return state;
};
//
const unit = {
  temp: '℃',
};

export {
  curCityNumber,
  getCurCityName,
  getAqiState,
  getWindState,
  unit,
};
