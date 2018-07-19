/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import LottieView from 'lottie-react-native';

import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  zh: {
    greeting: 'Bonjour!',
  },
};

const myIcon = (<Icon name="rocket" size={30} color="#900" />);
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,
  Cmd+D or shake for dev menu`,
  android:
    `Double tap R on your keyboard to reload,
    Shake or press menu button for dev menu`,
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text>
          {I18n.t('greeting')}
        </Text>
        {myIcon}
        <View style={{ width: 300, height: 300 }}>
          <LottieView
            ref={(animation) => {
              this.animation = animation;
            }}
            source={require('./app-stack/files/animations/checked_done_.json')}
          />
        </View>
      </View>
    );
  }
}

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
