/*
 * @Description 未来每小时天气
 * @Author: DongDong
 * @Date: 2018-07-21 16:31:31
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-26 13:42:19
 */
import React, { Component } from 'react';
import {
  StyleSheet, Image,
} from 'react-native';
import uuidv4 from 'uuid/v4';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';

export default class Hourly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourlyDom: null,
      hourlyData: null,
      showImage: true,
    };
  }

  componentDidMount() {
  }

  // 接收到prop变化
  componentWillReceiveProps(next) {
    const { hourlyData } = next;
    if (hourlyData) {
      this.setState({
        hourlyDom: this.generateHourly(hourlyData),
        hourlyData,
      });
    }
  }

  changeShowImage() {
    const { hourlyData, showImage } = this.state;
    this.setState({
      showImage: !showImage,
    }, () => {
      this.setState({
        hourlyDom: this.generateHourly(hourlyData),
      });
    });
  }

  generateHourly(hourlyData) {
    return hourlyData.map(obj => (
      <Styled.View style={[styles.hour_temperature_item, styles.active]} key={uuidv4()}>
        <Styled.Pbody style={styles.hour_temperature_item_hour} align="center">
          {obj.time}
          时
        </Styled.Pbody>
        <Image
          resizeMode="contain"
          style={[styles.hour_temperature_item_image, !this.state.showImage ? styles.displayNone : '']}
          source={obj.weatherImage}
        />
        <Styled.Pbody style={[styles.hour_temperature_item_weatherState, this.state.showImage ? styles.displayNone : '']} light type="primaryText" align="center" bold>
          {obj.weatherState}
        </Styled.Pbody>
        <Styled.Pbody style={[styles.hour_temperature_item_weather]} align="center">
          {obj.temperature}
          <Styled.Pcaption style={styles.Pcaption}>
            {obj.unit}
          </Styled.Pcaption>
        </Styled.Pbody>
      </Styled.View>
    ));
  }

  render() {
    return (
      // <TouchableHighlight
      //   underlayColor="transparent"
      //   onPress={() => { this.changeShowImage(); }}
      // >

      // </TouchableHighlight>
      <Styled.View style={styles.container}>
        <Styled.H2 style={styles.section_title} bold>
          24h
        </Styled.H2>
        <Styled.ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Styled.View style={[styles.section_body, styles.hour_temperature_wrapper]}>
            {this.state.hourlyDom}
          </Styled.View>
        </Styled.ScrollView>
      </Styled.View>

    );
  }
}

const itemheight = 30;
const styles = StyleSheet.create({
  section_title: {
    padding: constants.padding.m,
    paddingTop: constants.padding.l,
    paddingBottom: 0,
  },
  section_body: {
    paddingTop: constants.padding.m,
    paddingBottom: constants.padding.m,
  },
  hour_temperature_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  hour_temperature_item: {
    // paddingTop: constants.padding.s,
    // paddingBottom: constants.padding.s,
    // marginRight: constants.padding.mini,
    width: 57,
  },
  active: {
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // shadowColor: mainColor,
    // shadowOffset: { height: 0, width: 0 },
    // borderRadius: constants.radius.m,
  },
  hour_temperature_item_hour: {
  },
  hour_temperature_item_image: {
    marginTop: constants.padding.m,
    marginBottom: constants.padding.m,
    width: '100%',
    height: itemheight,
  },
  hour_temperature_item_weatherState: {
    marginTop: constants.padding.m,
    marginBottom: constants.padding.m,
    width: '100%',
    height: itemheight,
    lineHeight: itemheight,
  },
  displayNone: {
    display: 'none',
  },
  hour_temperature_item_weather: {
  },
});
