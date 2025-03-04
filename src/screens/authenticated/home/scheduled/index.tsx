import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Container, Title } from '@/shared/index'
import { Text } from 'react-native-paper'
import { AUTHENTICATED_PATH, AUTHENTICATED_PROPS } from '@/types/authenticatedType'
import { hp } from '@/utils/responsiveHelper'
import HeaderWithButton from '@/components/common/header-with-button'
import { taskList } from '../datas'

const Scheduled = ({ navigation }: AUTHENTICATED_PROPS) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  // Filter tasks for "Scheduled"
  const scheduledTasks = taskList.find(item => item.taskType === 'Scheduled')?.task || [];

  return (
    <Container padX={hp(2)}>
      <HeaderWithButton title='Scheduled Tasks' buttonText='Add Task' showButton press={()=>navigation.navigate(AUTHENTICATED_PATH.AddTask)} />
      {scheduledTasks.length > 0 ? (
        <FlatList
          data={scheduledTasks}
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
            <Text variant='bodyLarge' style={{ color: 'gray' }}>No Scheduled task</Text>
        </View>
      )}
    </Container>
  )
}

export default Scheduled
