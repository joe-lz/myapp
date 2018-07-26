/*
 * @Description 页面配置
 * @Author: DongDong
 * @Date: 2018-07-21 16:56:32
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-23 21:47:54
 */

import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';

// import api from './api';
// import Styled from './styled-components';
// import constants from './constants';

import AppStack from './App-stack';
import AppTabs from './App-tabs';
import Config from './config';

// Storage
const storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,
  // If not set, data would be lost after reload.
  storageBackend: AsyncStorage,
  // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,
  // cache data in the memory. default is true.
  enableCache: true,
  // if data was not found in storage or expired,
  // the corresponding sync method will be invoked and return
  // the latest data.
});
// I suggest you have one(and only one) storage instance in global scope.
global.storage = storage;
// global.app.api = api;
// global.app.Styled = Styled;
// global.app.constants = constants;

// 是否是tab页面
const { isTabApp } = Config;
export const IndexScreen = isTabApp ? AppTabs : AppStack;

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <IndexScreen />
    );
  }
}

export default App;
