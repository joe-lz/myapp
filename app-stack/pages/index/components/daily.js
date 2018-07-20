import React, { Component } from 'react';
import {
  StyleSheet, Image,
} from 'react-native';
import uuidv4 from 'uuid/v4';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';

export default class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyDom: null,
    };
  }

  componentDidMount() {
  }

  // 接收到prop变化
  componentWillReceiveProps(next) {
    const { dailyData } = next;
    if (dailyData) {
      this.setState({
        dailyDom: this.generateDaily(dailyData),
      });
    }
  }

  generateDaily(dailyData) {
    return dailyData.map((obj, index) => {
      let dom = null;
      if (index > 0 && index < 8) {
        dom = (
          <Styled.ViewFlex style={[styles.item_wrapper]} key={uuidv4()}>
            {/* {obj.aqi} */}
            <Styled.Pbody style={styles.Pbody}>
              {obj.time.week}
            </Styled.Pbody>
            {/* <Styled.Pbody style={styles.weatherState}>
              {obj.weatherState.to}
            </Styled.Pbody> */}
            <Styled.View style={styles.weatherState}>
              <Image
                resizeMode="contain"
                style={styles.temperature_item_image}
                source={obj.weatherImage.from}
              />
            </Styled.View>
            <Styled.Pbody style={styles.Pbody}>
              {`${obj.temperature.to}/${obj.temperature.from}`}
            </Styled.Pbody>
          </Styled.ViewFlex>
        );
      }
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
    paddingBottom: 0,
  },
  item_wrapper: {
    marginBottom: constants.padding.m,
  },
  weatherState: {
    flex: 1,
    // textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  temperature_item_image: {
    height: 15,
  },
});
