/*
 * @Description 首页
 * @Author: DongDong
 * @Date: 2018-07-20 14:30:10
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-26 15:44:31
 */

import {
  StyleSheet, StatusBar,
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_CURCITY_FUNC } from '../../../redux/actions/curCity';
import { SET_LOCAL_CITYS_FUNC } from '../../../redux/actions/localCitys';

import Styled from '../../../styled-components';
import constants from '../../../styled-components/constants';

import WeatherPage from './components/weatherPage';
import OperateBar from './components/operateBar';

import func from './func';

type Props = {};
class PageIndex extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // AsyncStorage.clear();
    // func.getLocalCitys().then((res) => {
    // });
    this.getLocalCitysAndCurCity(1);
  }

  getLocalCitysAndCurCity() {
    const { dispatchSET_CURCITY_FUNC, dispatchSET_LOCAL_CITYS_FUNC } = this.props;
    func.getLocalCitys().then((res) => {
      const localCitys = res;

      if (localCitys.length === 0) {
        // 没有设置地域
        // 1、设置默认的数组
        func.setDefaultCitys();
        this.getLocalCitysAndCurCity(2);
      } else if (localCitys.length > 0) {
        const curCity = func.getCurCity() ? func.getCurCity() : localCitys[0];

        dispatchSET_CURCITY_FUNC(curCity);
        dispatchSET_LOCAL_CITYS_FUNC(localCitys);
      }
    });
  }


  render() {
    const MyStatusBar = () => {
      if (constants.theme.mode === 'day') {
        return (
          <StatusBar
            backgroundColor="white"
            barStyle="dark-content"
          />
        );
      }
      return (
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
      );
    };
    // const { curCity } = this.state;
    const { curCity } = this.props;

    return (
      <Styled.SafeArea style={styles.SafeArea}>
        {MyStatusBar()}
        <WeatherPage curCity={curCity} />
        <OperateBar />
      </Styled.SafeArea>
    );
  }
}

function mapStateToProps(state) {
  return {
    curCity: state.curCity,
    localCitys: state.localCitys,
    weatherData: state.weatherData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchSET_CURCITY_FUNC: data => dispatch(SET_CURCITY_FUNC(data)),
    dispatchSET_LOCAL_CITYS_FUNC: data => dispatch(SET_LOCAL_CITYS_FUNC(data)),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageIndex);

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: constants.theme.bg,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
});
