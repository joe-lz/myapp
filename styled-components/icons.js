/*
 * @Description 未来每日天气
 * @Author: DongDong
 * @Date: 2018-07-21 16:30:51
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-26 13:45:31
 */

import React, { Component } from 'react';
import {
  StyleSheet, TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  // 接收到prop变化
  // componentWillReceiveProps(next) {
  // const { dailyData } = next;
  // if (dailyData) {}
  // }

  render() {
    return (
      <TouchableHighlight
        style={styles.TouchableHighlight}
        onPress={() => this.props.onPress()}
        underlayColor="transparent"
      >
        <Icon
          name="location-arrow"
          size={24}
          color="#2563F6"
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
});
