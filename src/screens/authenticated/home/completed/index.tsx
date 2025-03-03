import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Container, Title } from '@/shared/index'
import { Text } from 'react-native-paper'
import { AUTHENTICATED_PROPS } from '@/types/authenticatedType'
import { hp } from '@/utils/responsiveHelper'
import HeaderWithButton from '@/components/common/header-with-button'
import { taskList } from '../datas'

const Completed = ({ navigation }: AUTHENTICATED_PROPS) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  // Filter tasks for "Completed"
  const completedTasks = taskList.find(item => item.taskType === 'Completed')?.task || [];

  return (
    <Container padX={hp(2)}>
      <HeaderWithButton title='Completed Tasks' buttonText='' />
      {completedTasks.length > 0 ? (
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id.toString()}
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
      ) : (
        <View style={{ padding: hp(2), alignItems: 'center' }}>
          <Text variant='bodyLarge' style={{ color: 'gray' }}>No completed task yet</Text>
        </View>
      )}
    </Container>
  )
}

export default Completed
