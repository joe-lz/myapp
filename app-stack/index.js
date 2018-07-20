import { createStackNavigator } from 'react-navigation';

import PageIndexScreen from './pages/index';
import PageIndexDetailScreen from './pages/index-detail';

const Index = createStackNavigator({
  PageIndex: {
    screen: PageIndexScreen,
    navigationOptions: { headerTitle: '首页' },
  },
  PageIndexDetail: {
    screen: PageIndexDetailScreen,
    navigationOptions: { headerTitle: '首页detail' },
  },
}, {
  // mode: 'modal',
  // headerMode: 'none',
});

export default Index;
