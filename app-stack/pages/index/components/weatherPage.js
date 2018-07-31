/*
 * @Description 天气展示页
 * @Author: DongDong
 * @Date: 2018-07-21 16:31:57
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-30 16:10:42
 */

import React, { Component } from 'react';
import {
  StyleSheet, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { GET_WEATHER_DATA_FUNC } from '../../../../redux/actions/weatherData';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';

import Header from './header';
import Hourly from './hourly';
import Daily from './daily';
// import DailyTest from '../components/daily.test';
import Overview from './overview';
import Detail from './detail';

class WeatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curCity: {},
      dom: null,
    };
  }

  componentDidMount() {
  }

  // 接收到prop变化
  componentWillReceiveProps(next) {
    const { curCity, weatherData } = next;
    const { dispatchGET_WEATHER_DATA_FUNC } = this.props;
    if (curCity && curCity.city_num !== this.state.curCity.city_num) {
      this.setState({
        curCity,
      });
      dispatchGET_WEATHER_DATA_FUNC(curCity);
    }
    this.getDom(weatherData);
  }

  getDom(weatherData) {
    let dom = (
      <Styled.ViewFlex style={styles.loading_content} justifyContent="center" alignItems="center">
        <ActivityIndicator size="small" color={constants.theme.disabled} />
      </Styled.ViewFlex>
    );
    if (weatherData) {
      dom = (
        <Styled.ScrollView showsVerticalScrollIndicator={false}>
          {/* <DailyTest /> */}
          <Header weatherData={weatherData} />
          <Hourly hourlyData={weatherData.hourly} />
          <Daily dailyData={weatherData.daily} />
          <Overview weatherData={weatherData} />
          <Detail weatherData={weatherData} />
        </Styled.ScrollView>
      );
    }
    this.setState({
      dom,
    });
  }

  render() {
    return (
      <Styled.View style={styles.container}>
        {this.state.dom}
      </Styled.View>
    );
  }
}
function mapStateToProps(state) {
  return {
    weatherData: state.weatherData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchGET_WEATHER_DATA_FUNC: data => dispatch(GET_WEATHER_DATA_FUNC(data)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherPage);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  loading_content: {
    height: '100%',
  },
});
