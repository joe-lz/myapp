import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

type Props = {};
class PageIndex extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          Button
        </Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('PageIndexDetail')}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('PageIndexDetail')}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('PageIndexDetail')}
        />
      </View>
    );
  }
}

export default PageIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
