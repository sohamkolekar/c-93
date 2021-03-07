
import React from 'react';

import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import MyHeader from './components/MyHeader'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App(){
  
  return (
    
      
        <AppContainer/>
      
        
      
  
  );
  
}

const switchNavigator = createSwitchNavigator({

  Todo:{screen: AppTabNavigator},
 
})

const AppContainer =  createAppContainer(switchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
