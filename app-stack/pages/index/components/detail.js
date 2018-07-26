/*
 * @Description 天气详情
 * @Author: DongDong
 * @Date: 2018-07-21 16:31:07
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-25 10:31:42
 */
import React, { Component } from 'react';
import {
  StyleSheet,
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
      <Styled.View style={styles.temp}>
        <Styled.H2 style={styles.section_title} bold>
          详情
        </Styled.H2>
        <Styled.View style={styles.section_body}>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              空气质量指数
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {weatherData ? weatherData.today.aqi.value : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              空气质量
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {weatherData ? weatherData.today.aqi.state : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              体感温度
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {weatherData ? `${weatherData.today.feelsLike.value}${weatherData.today.feelsLike.unit}` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              湿度
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {weatherData ? `${weatherData.today.humidity.value}${weatherData.today.humidity.unit}` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              气压
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {/* ${weatherData.today.pressure.unit} */}
              {weatherData ? `${weatherData.today.pressure.value}百帕` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              紫外线指数
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {weatherData ? `${weatherData.today.uvIndex}` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              风速
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {weatherData ? `${weatherData.today.wind.speed.value}${weatherData.today.wind.speed.unit} - ${weatherData.today.wind.state}` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
        </Styled.View>
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
  },
  item_wrapper: {
    paddingTop: constants.padding.m,
    paddingBottom: constants.padding.m,
    borderTopWidth: StyleSheet.hairlineWidth,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: constants.theme.border,
  },
  item_title: {
    flex: 1,
  },
});
