/*
 * @Description 天气页头部
 * @Author: DongDong
 * @Date: 2018-07-21 16:31:18
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-25 13:31:15
 */
import React, { Component } from 'react';
import {
  StyleSheet, Image,
} from 'react-native';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
  }

  // 接收到prop变化
  componentWillReceiveProps(next) {
    const { weatherData } = next;
    this.setState({
      weatherData,
    });
  }

  render() {
    const { weatherData } = this.state;
    return (
      <Styled.View style={styles.container}>
        <Image
          style={styles.weather_img}
          source={require('../../../files/images/weather/cloudy.jpg')}
        />
        <Styled.View style={[styles.section_body, styles.temperature_info]}>
          <Styled.H1 style={styles.temperature}>
            {weatherData ? `${weatherData.hourly[0].temperature}${weatherData.today.temperature.unit}` : null}
          </Styled.H1>
          <Styled.Pbody style={styles.Pbody} type="primaryText">
            {weatherData ? `${weatherData.detail.cityname}，${weatherData.today.weatherState}` : null}
          </Styled.Pbody>
          <Styled.Pbody style={styles.cutTime} type="primaryText">
            {/* 更新时间: */}
            {weatherData ? `${weatherData.detail.date}，${weatherData.detail.week}` : null}
          </Styled.Pbody>
        </Styled.View>
      </Styled.View>
    );
  }
}

const mainColor = '#2563F6';
const styles = StyleSheet.create({
  weather_img: {
    marginTop: constants.padding.xxl,
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
  cutTime: {
    marginTop: constants.padding.mini,
  },
});
