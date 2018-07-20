import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

type Props = {};
class PageIndexDetail extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          index detail
        </Text>
      </View>
    );
  }
}

export default PageIndexDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
