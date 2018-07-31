/*
 * @Description 天气页头部
 * @Author: DongDong
 * @Date: 2018-07-21 16:31:18
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-31 20:49:12
 */
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native/src/js';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';

const sunnyAnimate = require('../../../files/animations/sunny.json');
const sunnyNightAnimate = require('../../../files/animations/sunny-night.json');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.animation.play();
  }

  render() {
    const { weatherData } = this.props;

    return (
      <Styled.View style={styles.container}>
        {/* <Image
          style={styles.weather_img}
          source={require('../../../files/images/weather/cloudy.jpg')}
        /> */}
        <Styled.View style={styles.animation_wrapper}>
          <LottieView
            ref={(animation) => {
              this.animation = animation;
            }}
            imageAssetsFolder="images/"
            source={constants.theme.mode === 'day' ? sunnyAnimate : sunnyNightAnimate}
          />
          {/* <LottieView
            ref={(animation) => {
              this.animation = animation;
            }}
            source={require('../../../files/animations/data.json')}
          /> */}
        </Styled.View>
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

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData,
  };
}

export default connect(
  mapStateToProps,
)(Header);


const styles = StyleSheet.create({
  weather_img: {
    marginTop: constants.padding.xxl,
    width: '100%',
    height: 240,
  },
  animation_wrapper: {
    marginTop: 100,
    marginBottom: 30,
    width: '100%',
    height: 240,
  },
  section_body: {
    padding: constants.padding.m,
  },
  temperature_info: {
  },
  temperature: {
    fontSize: 60,
    color: constants.theme.active,
    fontWeight: '300',
  },
  cutTime: {
    marginTop: constants.padding.mini,
  },
});
