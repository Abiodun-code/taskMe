import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Container, Title } from '@/shared/index'
import { Text } from 'react-native-paper'
import { AUTHENTICATED_PROPS } from '@/types/authenticatedType'
import { hp } from '@/utils/responsiveHelper'
import HeaderWithButton from '@/components/common/header-with-button'

const Completed = ({ navigation }: AUTHENTICATED_PROPS) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <Container padX={hp(2)}>
      <HeaderWithButton title='Completed Task' buttonText='' />
    </Container>
  )
}

export default Completed