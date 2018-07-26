/*
 * @Description 天气展示页
 * @Author: DongDong
 * @Date: 2018-07-21 16:31:57
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-07-21 19:25:59
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import Styled from '../../../../styled-components';

export default class AddCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <Styled.View style={styles.container}>
        <Styled.H1 style={styles.H1}>
          cbsbcjshb
        </Styled.H1>
      </Styled.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
