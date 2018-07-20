import React, { Component } from 'react';
import {
  StyleSheet, View, Button,
} from 'react-native';

type Props = {};
class Tab4 extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button
          title="Go to Sign"
          onPress={() => navigation.navigate('PageSign')}
        />
      </View>
    );
  }
}

export default Tab4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
