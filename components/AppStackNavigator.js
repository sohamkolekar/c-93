import React from 'react'

import {createStackNavigator} from 'react-navigation-stack'
import MyCalendar from './MyTodo'
import TodoEntry from './TodoEntryScreen'

export const AppStackNavigator = createStackNavigator({
    mycalendar : {
      screen : MyCalendar,
      navigationOptions:{
        headerShown : false
      }
    },
    todoEntryScreen : {
      screen : TodoEntry,
      navigationOptions:{
        headerShown : false
      }
    }
  },
    {
      initialRouteName: 'mycalendar'
    }
  );
  