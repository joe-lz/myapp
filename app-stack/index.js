import { createStackNavigator } from 'react-navigation';

import PageIndexScreen from './pages/index';
import PageIndexDetailScreen from './pages/index-detail';

import { strings } from '../locales';

const Index = createStackNavigator({
  PageIndex: {
    screen: PageIndexScreen,
    navigationOptions: { headerTitle: strings('tabs.tab1') },
  },
  PageIndexDetail: {
    screen: PageIndexDetailScreen,
    navigationOptions: { headerTitle: strings('tabs.tab1') },
  },
}, {
  // mode: 'modal',
  headerMode: 'none',
});

export default Index;
