/*
 * @Description 未来每日天气
 * @Author: DongDong
 * @Date: 2018-07-21 16:30:51
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-30 15:42:27
 */

import React, { Component } from 'react';
import {
  StyleSheet, Image,
} from 'react-native';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';

import Styled from '../../../../styled-components';
import constants from '../../../../styled-components/constants';

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyDom: null,
    };
  }

  componentDidMount() {
    const { dailyData } = this.props;
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
            <Styled.Pbody style={styles.week}>
              {obj.time.week}
            </Styled.Pbody>
            <Styled.View style={styles.weatherState}>
              <Image
                resizeMode="contain"
                style={styles.temperature_item_image}
                source={obj.weatherImage.from}
              />
            </Styled.View>
            <Styled.Pbody style={styles.temperature}>
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
        <Styled.H2 style={styles.section_title} bold>
          7天
        </Styled.H2>
        <Styled.View style={[styles.section_body]}>
          {this.state.dailyDom}
        </Styled.View>
      </Styled.View>
    );
  }
}
function mapStateToProps(state) {
  return {
    weatherData: state.weatherData,
  };
}
export default connect(
  mapStateToProps,
)(Daily);

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
