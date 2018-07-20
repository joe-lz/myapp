import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

type Props = {};
class Tab3 extends Component<Props> {
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

export default Tab3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
