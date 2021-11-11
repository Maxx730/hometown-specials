import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Colors, Sizes } from './lib/Constants';
import { GetSetting } from './lib/Cache';

import Main from './views/Main';
import Details from './views/Details';
import LocationAdmin from './views/LocationAdmin';
import Settings from './views/Settings';
import Search from './views/Search';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (!loaded) {
      GetSetting('DarkTheme').then(_val => {
        setDarkTheme(JSON.parse(_val));
      });

      setLoaded(true);
    }
  });

  const GetScreenOptions = () => {
    return {
      headerShown: false,
      darkTheme: darkTheme
    }
  }

  const GetRouteIcon = (_route) => {
    switch(_route) {
      case 'Settings':
        return 'settings';
      case 'Home':
        return 'home';
      case 'Search':
        return 'search'
      case 'Favorites':
        return 'heart';
      default:
        return 'circle';
    }
  }

  const Styles = StyleSheet.create({
    Bar: {
      borderTopWidth: 0,
      backgroundColor: darkTheme ? Colors.Darker : Colors.White,
      height: 72
    }
  });

  const ForceUpdate = () => {
    setLoaded(false);
  }

  const _params =  {
    darkTheme: darkTheme,
    _refresh: ForceUpdate
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return <Feather color={focused ? Colors.Primary : (darkTheme ? Colors.White : Colors.Black)} name={GetRouteIcon(route.name)} size={32}/>
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'red',
        tabBarShowLabel: false,
        tabBarStyle: Styles.Bar
      })}>
          <Tabs.Screen name="Home" component={Main}/>
          <Tabs.Screen name="Search" options={GetScreenOptions()} initialParams={_params} component={Search}/>
          <Tabs.Screen name="Favorites" component={Search}/>
          <Tabs.Screen name="Settings" options={GetScreenOptions()} initialParams={_params} component={Settings}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
