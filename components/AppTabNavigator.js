import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'



export const AppTabNavigator = createBottomTabNavigator({
  todo : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarLabel : "Todoscreen",
    }
  }
 
  
});