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
        <Styled.H3 style={styles.section_title} bold>
          详情
        </Styled.H3>
        <Styled.View style={styles.section_body}>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              空气质量指数
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {newRes ? newRes.today.aqi.value : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              空气质量
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {newRes ? newRes.today.aqi.state : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              体感温度
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {newRes ? `${newRes.today.feelsLike.value}${newRes.today.feelsLike.unit}` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              湿度
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {newRes ? `${newRes.today.humidity.value}${newRes.today.humidity.unit}` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              气压
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {/* ${newRes.today.pressure.unit} */}
              {newRes ? `${newRes.today.pressure.value}百帕` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              紫外线指数
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {newRes ? `${newRes.today.uvIndex}` : null}
            </Styled.Pbody>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]}>
            <Styled.Pbody style={styles.item_title}>
              风速
            </Styled.Pbody>
            <Styled.Pbody style={styles.Pbody}>
              {newRes ? `${newRes.today.wind.speed.value}${newRes.today.wind.speed.unit} - ${newRes.today.wind.state}` : null}
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
    borderColor: constants.dark.border,
  },
  item_title: {
    flex: 1,
  },
});
