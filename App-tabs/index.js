import React from 'react';
import {
  StyleSheet, Image,
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// tab
import Tab1Screen from './tabs1';
import Tab2Screen from './tabs2';
import Tab3Screen from './tabs3';
import Tab4Screen from './tabs4';
// stack
import PageSignScreen from './pages/sign';

import { strings } from '../locales';

// stack页面----------------------------------------------------
const Tab1Stack = createStackNavigator({
  Tab1: {
    screen: Tab1Screen,
    navigationOptions: { headerTitle: strings('tabs.tab1') },
  },
  Tab1Detail: PageSignScreen,
}, {
  // headerMode: 'none',
});
const Tab2Stack = createStackNavigator({
  Tab2: {
    screen: Tab2Screen,
    navigationOptions: { headerTitle: strings('tabs.tab2') },
  },
  Tab2Detail: PageSignScreen,
});
const Tab3Stack = createStackNavigator({
  Tab3: {
    screen: Tab3Screen,
    navigationOptions: { headerTitle: strings('tabs.tab3') },
  },
  Tab3Detail: PageSignScreen,
});
const Tab4Stack = createStackNavigator({
  Tab4: createStackNavigator({
    Tab4: {
      screen: Tab4Screen,
      navigationOptions: { headerTitle: strings('tabs.tab4') },
    },
    Tab4Detail: PageSignScreen,
  }),
  PageSign: PageSignScreen,
}, {
  headerMode: 'none',
  mode: 'modal',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

// tab页面
export default createBottomTabNavigator({
  Tab1: {
    screen: Tab1Stack,
    navigationOptions: () => ({
      tabBarLabel: strings('tabs.tab1'),
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? require('./files/images/tabIcons/headline2.png') : require('./files/images/tabIcons/headline.png')}
          style={[styles.icon]}
        />
      ),
    }),
  },
  Tab2: {
    screen: Tab2Stack,
    navigationOptions: () => ({
      tabBarLabel: strings('tabs.tab2'),
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? require('./files/images/tabIcons/headline2.png') : require('./files/images/tabIcons/headline.png')}
          style={[styles.icon]}
        />
      ),
    }),
  },
  Tab3: {
    screen: Tab3Stack,
    navigationOptions: () => ({
      tabBarLabel: strings('tabs.tab3'),
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? require('./files/images/tabIcons/headline2.png') : require('./files/images/tabIcons/headline.png')}
          style={[styles.icon]}
        />
      ),
    }),
  },
  Tab4: {
    screen: Tab4Stack,
    navigationOptions: () => ({
      tabBarLabel: strings('tabs.tab4'),
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? require('./files/images/tabIcons/headline2.png') : require('./files/images/tabIcons/headline.png')}
          style={[styles.icon]}
        />
      ),
    }),
  },
}, {
  tabBarOptions: {
    activeTintColor: '#222',
    inactiveTintColor: 'gray',
  },
  // 非根目录不显示Tab bar
  navigationOptions: ({ navigation }) => {
    const { index } = navigation.state;
    const tabBarVisible = index === 0;
    return ({
      tabBarVisible,
    });
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
