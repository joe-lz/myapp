/*
 * @Description 首页
 * @Author: DongDong
 * @Date: 2018-07-20 14:30:10
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-21 15:43:49
 */

import {
  StyleSheet, StatusBar,
} from 'react-native';
import React, { Component } from 'react';
import moment from 'moment/min/moment-with-locales';

import Styled from '../../../styled-components';
import api from '../../../api';
import {
  curCityNumber, getCurCityName, getAqiState, getWindState,
} from '../../config';
import { getFinalData } from './generateData';

import Header from './components/header';
import Hourly from './components/hourly';
import Daily from './components/daily';
// import DailyTest from './components/daily.test';
import Overview from './components/overview';
import Detail from './components/detail';

type Props = {};
class PageIndex extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      newRes: null,
    };
  }

  componentDidMount() {
    api.weather.getWeatherFromXiaomi(curCityNumber).then((res) => {
      const newRes = getFinalData(res);
      newRes.today.aqi.state = getAqiState(newRes.today.aqi.value);
      newRes.today.wind.state = getWindState(newRes.today.wind.speed.value);
      // 生成detail
      newRes.detail = {};
      newRes.detail.cityname = getCurCityName(curCityNumber);
      newRes.detail.date = moment().format('MM月DD号');
      newRes.detail.week = moment().format('dddd');
      this.setState({ newRes });
    });
  }

  render() {
    // const { navigation } = this.props;
    const { newRes } = this.state;
    return (
      <Styled.SafeArea style={styles.temp}>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Styled.ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          {/* <DailyTest /> */}
          <Header newRes={newRes} />
          <Hourly hourlyData={newRes ? newRes.hourly : null} />
          <Daily dailyData={newRes ? newRes.daily : null} />
          <Overview newRes={newRes} />
          <Detail newRes={newRes} />
        </Styled.ScrollView>
      </Styled.SafeArea>
    );
  }
}

export default PageIndex;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
});
