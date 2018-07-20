import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';

export default class Overview extends Component {
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

  generateOverview() {
    const { detail, today, daily } = this.state.newRes;
    return (
      <Styled.Pbody style={styles.section_body}>
        {/* ${detail.date}，${detail.week}， */}
        {`${detail.cityname}：${today.weatherState}，最高温度${daily[0].temperature.from}${today.temperature.unit}，最低温度${daily[0].temperature.to}${today.temperature.unit}。${today.aqi.suggest}。`}
      </Styled.Pbody>
    );
  }

  render() {
    const { newRes } = this.state;
    return (
      <Styled.View style={styles.temp}>
        <Styled.H3 style={styles.section_title} bold>
          概览
        </Styled.H3>
        {newRes ? this.generateOverview() : <Styled.View />}
      </Styled.View>
    );
  }
}

const styles = StyleSheet.create({
  section_title: {
    padding: constants.padding.m,
    paddingTop: constants.padding.l,
    paddingBottom: 0,
  },
  section_body: {
    padding: constants.padding.m,
    lineHeight: constants.lh.s,
  },
});
