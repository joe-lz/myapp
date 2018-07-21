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
      newRes: null,
    };
  }

  componentDidMount() {
  }

  // 接收到prop变化
  componentWillReceiveProps(next) {
    const { newRes } = next;
    this.setState({
      newRes,
    });
  }

  render() {
    const { newRes } = this.state;
    return (
      <Styled.View style={styles.temp}>

        <Image
          style={styles.weather_img}
          source={require('../../../files/images/weather/cloudy.jpg')}
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
  pubTime: {
    marginTop: constants.padding.mini,
  },
});
