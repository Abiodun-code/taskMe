import { View, FlatList, PanResponder } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Container, Title } from '@/shared/index'
import { Text } from 'react-native-paper'
import { AUTHENTICATED_PATH, AUTHENTICATED_PROPS } from '@/types/authenticatedType'
import { hp } from '@/utils/responsiveHelper'
import HeaderWithButton from '@/components/common/header-with-button'
import { taskList } from '../datas'
import TodayItem from './components/today-item'

const Today = ({ navigation }: AUTHENTICATED_PROPS) => {

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  // Filter tasks for "Today"
  const todayTasksData = taskList.find(item => item.taskType === 'Today')?.task || [];

  // Use state to manage today's tasks dynamically
  const [todayTasks, setTodayTasks] = useState(todayTasksData);

  // Function to delete a task
  const deleteTask = (id: number) => {
    const updatedTasks = todayTasks.filter(task => task.id !== id);
    setTodayTasks(updatedTasks);
  };

  

  return (
    <Container padX={hp(2)}>
      <HeaderWithButton title='Today’s Tasks' buttonText='Add Task' showButton={true} press={()=>navigation.navigate(AUTHENTICATED_PATH.AddTask)} />
      {todayTasks.length > 0 ? (
        <FlatList
          data={todayTasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TodayItem item={item} deleteTask={deleteTask} />}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: hp(2) }}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps="handled"
        />
      ) : (
        <View style={{ padding: hp(2), alignItems: 'center' }}>
          <Text variant='bodyLarge' style={{ color: 'gray' }}>No tasks for today</Text>
        </View>
      )}
    </Container>
  )
}

export default Today
