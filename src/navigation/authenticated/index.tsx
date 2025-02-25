import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AUTHENTICATED_STACK } from './authData'

const { Navigator, Screen } = createNativeStackNavigator()

const Authenticated = () => {

  const Screens = AUTHENTICATED_STACK.map((item, index) => (
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

export default Authenticated