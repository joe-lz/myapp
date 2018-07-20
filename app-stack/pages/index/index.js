import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import Styled from '../../../styled-components';
import api from '../../../api';

type Props = {};
class PageIndex extends Component<Props> {
  componentDidMount() {
    api.weather.getWeatherFromXiaomi(101210101).then((res) => {
      console.log(res);
    });
  }

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
        <Styled.View style={styles.temp} bg="green">
          <Styled.H1 style={styles.H1} light type="primaryText" align="center" bold>
            cdsc
          </Styled.H1>
        </Styled.View>
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
