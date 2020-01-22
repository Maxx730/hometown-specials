import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Analytics, Event } from 'expo-analytics';

const analytics = new Analytics('UA-156478860-1');

//Import Views
import Main from './views/Main';
import Settings from './views/Settings';
import EULA from './views/EULA';
import Special from './views/Special';

//Import Data
import data from './lib/Data';

const AppNavigator = createStackNavigator({
  HometownSpecials: {
    screen: Main,
    params: {
      data: data,
      analytics: analytics
    },
  },
  Settings: {
    screen: Settings,
    params: {
      analytics: analytics
    }
  },
  EULA: {
    screen: EULA,
    params: {
      analytics: analytics
    }
  },
  Special: {
    screen: Special
  }
});

export default createAppContainer(AppNavigator);
