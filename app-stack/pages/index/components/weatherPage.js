/*
 * @Description 天气展示页
 * @Author: DongDong
 * @Date: 2018-07-21 16:31:57
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-25 18:25:34
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { GET_WEATHER_DATA_FUNC } from '../../../../redux/actions/weatherData';

import Styled from '../../../../styled-components';

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
    };
  }

  componentDidMount() {
  }

  // 接收到prop变化
  componentWillReceiveProps(next) {
    const { curCity } = next;
    const { dispatchGET_WEATHER_DATA_FUNC } = this.props;
    if (curCity && curCity.city_num !== this.state.curCity.city_num) {
      this.setState({
        curCity,
      });
      dispatchGET_WEATHER_DATA_FUNC(curCity);
    }
  }

  render() {
    const { weatherData } = this.props;
    return (
      <Styled.View style={styles.container}>
        <Styled.ScrollView showsVerticalScrollIndicator={false}>
          {/* <DailyTest /> */}
          <Header weatherData={weatherData} />
          <Hourly hourlyData={weatherData ? weatherData.hourly : null} />
          <Daily dailyData={weatherData ? weatherData.daily : null} />
          <Overview weatherData={weatherData} />
          <Detail weatherData={weatherData} />
        </Styled.ScrollView>
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
});
