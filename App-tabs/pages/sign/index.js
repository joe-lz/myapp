import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

type Props = {};
class PageSign extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          sign
        </Text>
      </View>
    );
  }
}

export default PageSign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
