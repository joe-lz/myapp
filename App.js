import React, { Component } from 'react';
import AppStack from './App-stack';
import AppTabs from './App-tabs';
import Config from './config';

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
