import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {Container} from '@/shared/index'
import { NOT_AUTHENTICATED_PROPS } from '@/types/notAuthenticatedType'
import { hp } from '@/utils/responsiveHelper'
// 538485604438-6h2vj8hk735cdcnombh7pmhokj0lakum.apps.googleusercontent.com

const Onboarding = ({navigation}: NOT_AUTHENTICATED_PROPS) => {

  useEffect(()=>{
    navigation.setOptions({headerShown:false})
  },[])

  return (
    <Container padX={hp(2)}>
      <Text>Onboarding</Text>
    </Container>
  )
}

export default Onboarding