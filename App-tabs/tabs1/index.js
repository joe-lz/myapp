import React, { Component } from 'react';
import {
  // Platform, StyleSheet, Text, View, Button,
  StyleSheet, Text, View,
} from 'react-native';
import moment from 'moment/min/moment-with-locales';

moment.locale('zh-cn');

type Props = {};
class Tab1 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          tabs
        </Text>
      </View>
    );
  }
}

export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
