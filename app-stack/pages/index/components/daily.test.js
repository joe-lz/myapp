import React, { Component } from 'react';
import {
  StyleSheet, Image,
} from 'react-native';
import uuidv4 from 'uuid/v4';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';
import { getWeatherImage } from '../generateData';

export default class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyDom: null,
    };
  }

  componentDidMount() {
    this.setState({
      dailyDom: this.generateDaily(),
    });
  }

  generateDaily() {
    const dailyData = [...Array(36).keys()];
    return dailyData.map((obj) => {
      let dom = null;
      dom = (
        <Styled.ViewFlex style={[styles.item_wrapper]} key={uuidv4()}>
          <Styled.View style={styles.weatherState}>
            <Image
              resizeMode="contain"
              style={styles.temperature_item_image}
              source={getWeatherImage(obj)}
            />
            <Styled.Pcaption style={styles.Pcaption} bold>
              {obj}
            </Styled.Pcaption>
            <Image
              resizeMode="contain"
              style={styles.temperature_item_image}
              source={getWeatherImage(obj, 0)}
            />
          </Styled.View>
        </Styled.ViewFlex>
      );
      return dom;
    });
  }

  render() {
    return (
      <Styled.View>
        <Styled.H3 style={styles.section_title} bold>
          7天
        </Styled.H3>
        <Styled.View style={[styles.section_body]}>
          {this.state.dailyDom}
          <Styled.ViewFlex style={[styles.item_wrapper]} key={uuidv4()}>
            <Styled.View style={styles.weatherState}>
              <Image
                resizeMode="contain"
                style={styles.temperature_item_image}
                source={getWeatherImage(53)}
              />
              <Styled.Pcaption style={styles.Pcaption} bold>
                {53}
              </Styled.Pcaption>
              <Image
                resizeMode="contain"
                style={styles.temperature_item_image}
                source={getWeatherImage(53, 0)}
              />
            </Styled.View>
          </Styled.ViewFlex>
          <Styled.ViewFlex style={[styles.item_wrapper]} key={uuidv4()}>
            <Styled.View style={styles.weatherState}>
              <Image
                resizeMode="contain"
                style={styles.temperature_item_image}
                source={getWeatherImage(99)}
              />
              <Styled.Pcaption style={styles.Pcaption} bold>
                {99}
              </Styled.Pcaption>
              <Image
                resizeMode="contain"
                style={styles.temperature_item_image}
                source={getWeatherImage(99, 0)}
              />
            </Styled.View>
          </Styled.ViewFlex>
        </Styled.View>
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
    padding: constants.padding.m,
    paddingBottom: 0,
  },
  item_wrapper: {
    marginBottom: constants.padding.m,
    height: itemheight,
  },
  weatherState: {
    flex: 1,
    // textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  temperature_item_image: {
    height: itemheight,
  },
  temperature: {
    lineHeight: itemheight,
  },
  week: {
    lineHeight: itemheight,
  },
});
