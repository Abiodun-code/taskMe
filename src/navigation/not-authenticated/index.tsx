import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NOT_AUTHENTICATED_STACK } from './stackData'

const { Navigator, Screen } = createNativeStackNavigator()

const NotAuthenticated = () => {

  const Screens = NOT_AUTHENTICATED_STACK.map((item, index)=>(
    <Screen
      key={index}
      name={item.name}
      component={item.screen}
    />
  ))
  
  return (
    <Navigator>
      {Screens}
    </Navigator>
  )
}

export default NotAuthenticated