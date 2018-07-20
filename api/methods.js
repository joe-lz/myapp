/*
 * @Description 请求封装
 * @Author: DongDong
 * @Date: 2018-07-20 13:40:24
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-20 14:43:25
 */

import axios from 'axios';
import md5 from 'md5';
import ProjectConfig from '../config';

const method = (url, options = {}) => {
  const newOptions = options;
  newOptions.url = url || newOptions.url;
  const isCompleteUrl = /^http/.test(newOptions.url); // 是否是完整的url
  newOptions.url = isCompleteUrl ? newOptions.url : `${ProjectConfig.root}${newOptions.url}`;
  // 拦截器
  const token = 'csdjcndsnc';
  const timeStamp = Date.now();
  const injectObj = {
    token,
    timeStamp,
    signature: md5(`youmiao${timeStamp}${token}`),
  };
  // Request拦截器
  axios.interceptors.request.use((config) => {
    const newConfig = config;
    newConfig.headers = Object.assign(newConfig.headers || {}, injectObj);
    if (newOptions.loading !== false) {
      // 开启加载动画
    }
    return newConfig;
  }, error => Promise.reject(error));
  // Response拦截器
  axios.interceptors.response.use((res) => {
    if (res.config.loading !== false) {
      // 关闭加载动画
    }
    return res;
  }, error => Promise.reject(error));

  // return axios(newOptions);
  return new Promise((resolve, reject) => {
    axios(newOptions).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
};

const post = (url, data, options) => method(
  url,
  Object.assign({}, options, {
    method: 'post',
    data,
  }),
);

const get = (url, options) => method(
  url,
  Object.assign({}, options, {
    method: 'get',
  }),
);


export {
  post,
  get,
};
