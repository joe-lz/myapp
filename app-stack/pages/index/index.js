/*
 * @Description 首页
 * @Author: DongDong
 * @Date: 2018-07-20 14:30:10
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-20 16:14:33
 */

import {
  StyleSheet, Image, StatusBar,
} from 'react-native';
import React, { Component } from 'react';
import moment from 'moment/min/moment-with-locales';

import Styled from '../../../styled-components';
import constants from '../../../styled-components/constants';
import api from '../../../api';
import {
  curCityNumber, getCurCityName, getAqiState, getWindState,
} from '../../config';
import { getFinalData } from './generateData';

import Hourly from './components/hourly';
import Daily from './components/daily';
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
          <Image
            style={styles.weather_img}
            source={require('../../files/images/weather/cloudy.jpg')}
          />
          <Styled.View style={[styles.section_body, styles.temperature_info]}>
            <Styled.H1 style={styles.temperature}>
              {newRes ? `${newRes.hourly[0].temperature}${newRes.today.temperature.unit}` : null}
            </Styled.H1>
            <Styled.Pbody style={styles.Pbody} type="primaryText">
              {newRes ? `${newRes.detail.cityname}，${newRes.today.weatherState}` : null}
            </Styled.Pbody>
            <Styled.Pbody style={styles.pubTime} type="primaryText">
              {/* 更新时间: */}
              {newRes ? `${newRes.detail.date}，${newRes.detail.week}` : null}
            </Styled.Pbody>
          </Styled.View>
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

const mainColor = '#2563F6';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  weather_img: {
    // marginTop: constants.padding.xxl,
    width: '100%',
    height: 220,
  },
  section_body: {
    padding: constants.padding.m,
  },
  temperature_info: {
  },
  temperature: {
    fontSize: 60,
    color: mainColor,
    fontWeight: '300',
  },
  pubTime: {
    marginTop: constants.padding.mini,
  },
});
