import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { hp } from '@/utils/responsiveHelper'
import SwipeableItem from '@/components/common/swipe-left'

type Props = {
  item: any
  deleteTask: (id: number) => void
}

const TodayItem = ({ item, deleteTask }: Props) => {
  return (
    <SwipeableItem onDelete={() => deleteTask(item.id)}>
      <View style={styles.taskContainer}>
        <Text variant="titleMedium" style={{ fontFamily: 'i700' }}>{item.title}</Text>
        <Text variant="bodyMedium">{item.description}</Text>
        <Text variant="bodySmall" style={{ color: 'gray' }}>{item.date} | {item.time}</Text>
      </View>
    </SwipeableItem>
  )
}

export default TodayItem

const styles = StyleSheet.create({
  taskContainer: {
    padding: hp(2),
    marginVertical: hp(1),
    backgroundColor: '#f5f5f5',
    borderRadius: hp(1),
    flex: 1,
  },
})
