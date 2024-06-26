import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/HomeScreen';
import MyCardsScreen from './components/MyCards';
import SettingsScreen from './components/SettingsScreen';
import StatisticsScreen from './components/StatisticsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    
    <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'My Cards') {
              iconName = focused ? 'card' : 'card-outline';
            } else if (route.name === 'Statistics') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              isDarkTheme={isDarkTheme}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="My Cards" component={MyCardsScreen}
         />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings">
          {(props) => (
            <SettingsScreen
              {...props}
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator >
    </NavigationContainer>
    
  );
};

const lightTheme = {
  dark: false,
  colors: {
    primary: 'rgb(26, 26, 255)',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'gray',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: 'rgb(26, 26, 255)',
    background: '#000',
    card: 'rgb(0, 0, 51)',
    text: 'white',
    border: 'gray',
  },
};

export default App;
