import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NotAuthenticated from './not-authenticated'
import Authenticated from './authenticated'

const Main = () => {
  return (
    <NavigationContainer>
      <Authenticated/>
    </NavigationContainer>
  )
}

export default Main