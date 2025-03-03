import { ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Container, Title } from '@/shared/index'
import { Text } from 'react-native-paper'
import { AUTHENTICATED_PROPS } from '@/types/authenticatedType'
import { hp } from '@/utils/responsiveHelper'
import HeaderWithButton from '@/components/common/header-with-button'
import { FlatList } from 'react-native'
import { taskList } from '../datas'

const All = ({ navigation }: AUTHENTICATED_PROPS) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  // Extract all tasks from taskList
  const allTasks = taskList.flatMap(item => item.task);

  return (
    <Container padX={hp(2)}>
      <HeaderWithButton title='All Tasks' buttonText='' />
      <FlatList
        data={allTasks}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{
            padding: hp(2),
            marginVertical: hp(1),
            backgroundColor: '#f5f5f5',
            borderRadius: hp(1),
          }}>
            <Text variant='titleMedium' style={{ fontFamily: 'i700' }}>{item.title}</Text>
            <Text variant='bodyMedium'>{item.description}</Text>
            <Text variant='bodySmall' style={{ color: 'gray' }}>{item.date} | {item.time}</Text>
          </View>
        )}
      />
    </Container>
  )
}

export default All
