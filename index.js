/** @format */

import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './App';
import reducers from './redux/reducers';
import { name as appName } from './app.json';

const loggerMiddleware = createLogger();
const store = createStore(
  reducers,
  // applyMiddleware(thunkMiddleware),
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

const FinalApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => FinalApp);

// 忽略部分提醒事项
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
  'Remote debugger',
]);
