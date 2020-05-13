import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Analytics, Event } from "expo-analytics";
import { Text } from 'react-native';

const analytics = new Analytics("UA-156478860-1");

//Import Views
import Main from "./views/Main";
import Settings from "./views/Settings";
import EULA from "./views/EULA";
import Special from "./views/Special";
import Submit from "./views/Submit";
import Details from './views/Details';

//Import Data
import data from "./lib/Data";

const AppNavigator = createStackNavigator({
  HometownSpecials: {
    screen: Main,
    params: {
      data: data,
      analytics: analytics
    }
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
    screen: Special,
    params: {
      analytics: analytics
    }
  },
  Submit: {
    screen: Submit,
    params: {

    }
  },
  Details: {
    screen: Details,
    params: {
      analytics: analytics
    },
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('Title', 'Default Title'),
      };
    }
  }
});

export default createAppContainer(AppNavigator);

