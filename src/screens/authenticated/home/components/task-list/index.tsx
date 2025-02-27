import { View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from "@expo/vector-icons"
import { hp } from '@/utils/responsiveHelper'
import Colors from '@/constants/color'
import { Text } from 'react-native-paper'
import {Button} from '@/shared/index'

type Props = {
  item: any,
  index: number
}

const TaskList = ({item, index}:Props) => {
  return (
    <View style={{paddingTop:hp(2)}}>
      <Button flexD='row' justContent='space-between' itemAlign='center' bg={Colors.lightGray} ph={hp(1.5)} pv={hp(2)} borderR={hp(1.5)} mb={hp(1)}>
        <View style={{width: hp(5), height: hp(5), backgroundColor: item.color,borderRadius: hp(4), alignItems: 'center', justifyContent: 'center', marginRight: hp(1)}}>
          <FontAwesome5 name={item.icon} size={hp(2.5)} color={Colors.white} />
        </View>
        <Text variant='titleMedium' style={{ color: Colors.black, fontFamily: 'i700', flex: 1 }}>{item.name}</Text>
        <View>
          <FontAwesome5 name="chevron-right" size={hp(2)}/>
        </View>
      </Button>
    </View>
  )
}

export default TaskList