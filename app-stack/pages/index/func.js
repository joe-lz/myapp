import { keyName } from '../../config';
import Allcitys from '../../files/weather-data/citys';

// 获取当前城市
const getCurCity = () => {
  let curCity = null;
  storage.load({ key: keyName.curCity }).then((res) => {
    curCity = res;
  }).catch(() => {
    // 如果没有找到数据且没有sync方法，
    // 没有设置地域
    curCity = null;
  });
  return curCity;
};
// 设置当前城市
const setCurCity = (city) => {
  storage.save({
    key: keyName.curCity,
    data: city,
  });
};

// 获取本地城市列表
const getLocalCitys = async () => {
  let arr = null;
  await storage.load({ key: keyName.cityArr }).then((res) => {
    arr = res;
  }).catch(() => {
    // 如果没有找到数据且没有sync方法，
    // 没有设置地域
    arr = [];
  });
  return arr;
};
// 设置本地城市列表
const setLocalCitys = (citys) => {
  storage.save({
    key: keyName.cityArr,
    data: citys,
  });
};

// 设置默认城市 列表
const setDefaultCitys = () => {
  const defaultCityList = Allcitys.RECORDS.map((obj) => {
    if (obj.default) {
      return obj;
    }
    return null;
  }).filter(obj => obj && obj.name);
  storage.save({
    key: keyName.cityArr,
    data: defaultCityList,
  });
};

export default {
  getLocalCitys,
  setLocalCitys,
  setDefaultCitys,
  getCurCity,
  setCurCity,
};
