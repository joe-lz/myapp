/*
 * @Description 天气接口
 * @Author: DongDong
 * @Date: 2018-07-08 22:25:59
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-13 20:38:52
 */
import { get } from '../methods';
/**
 * @description 小米天气接口
 * @query latitude：纬度信息。可填固定值0
 * @query longitude：经度信息。可填固定值0
 * @query locationKey：weathercn: + 地区 city_num，见数据库中的 city_num 字段，例：weathercn:101010100 表北京
 * @query sign：签名值，固定值zUFJoAR2ZVrDy1vF3D07
 * @query isGlobal：固定值 false
 * @query locale：固定值 zh_cn
 * @query days：获取包括今日在内的几天内的数据。可不填，默认为5
 * @query romVersion：可不填或者去除该参数
 * @query appVersion：可不填或者去除该参数
 * @query alpha：可不填或者去除该参数
 * @query device：可不填或者去除该参数
 * @query modDevice：可不填或者去除该参数
 * @see {@link https://github.com/jokermonn/-Api/blob/master/XiaomiWeather.md}
 * @return {JSON}
 */

export const getWeatherFromXiaomi = (citycode) => {
  const latitude = 110;
  const longitude = 112;
  const locationKey = encodeURIComponent(`weathercn:${citycode}`);
  const appKey = 'weather20151024';
  const sign = 'zUFJoAR2ZVrDy1vF3D07';
  const isGlobal = false;
  const locale = 'zh_cn';
  const weatherUrlRoot = 'https://weatherapi.market.xiaomi.com/wtr-v3/weather/all';
  const weatherUrl = `${weatherUrlRoot}?latitude=${latitude}&longitude=${longitude}&locationKey=${locationKey}&appKey=${appKey}&sign=${sign}&isGlobal=${isGlobal}&locale=${locale}`;
  return get(weatherUrl);
};

export const baidu = () => get('https://www.baidu.com');
