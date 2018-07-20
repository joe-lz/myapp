/*
 * @Description 登录接口
 * @Author: DongDong
 * @Date: 2018-07-20 13:40:56
 * @Last Modified by:   DongDong
 * @Last Modified time: 2018-07-20 13:40:56
 */

import { post, get } from '../methods';

/**
 * @description 登录接口
 * @param id {Number} 商品Id
 * @param source [{String}] 非必填， 来源(H5 ANDROID IOS APPLET)
 * @see {@link http://www.baidu.com}
 * @return {Promise}
 */
export const sign = (data, options = { loading: false }) => post('/api/v2.2/home', data, options);

export const baidu = () => get('https://www.baidu.com');

// import $api from '../../../api/index';
// $api.sign.sign({ name: 'jason' }).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.error(err);
// });
// $api.sign.baidu().then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.error(err);
// });
