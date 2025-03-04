import { View, Text, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import { AUTHENTICATED_PROPS } from '@/types/authenticatedType'
import {Container, CustomInput, Title} from '@/shared/index'
import { hp } from '@/utils/responsiveHelper'
import Colors from '@/constants/color'

const AddTask = ({navigation}:AUTHENTICATED_PROPS) => {

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })},[])

  return (
    <Container padX={hp(2)}>
      <View style={{paddingBlockEnd:hp(2)}}>
        <Title showIcon={true} color={Colors.shadeBlue} iconColor={Colors.shadeBlue} font={'i500'} variant={'titleMedium'}>Add Task</Title>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: hp(2) }} style={{ flex: 1 }}>
          <CustomInput placeholder="List Name" label="" bg={Colors.lightGray} bgColor={Colors.lightGray} textA="left" />
          <CustomInput placeholder="List Name" label="" bg={Colors.lightGray} bgColor={Colors.lightGray} textA="left" numberOfLines={10} multiline={true} minHeight={hp(20)} textAV={Platform.OS === "android" ? 'top' : 'auto'}/>
        </ScrollView>
      </KeyboardAvoidingView>
      
    </Container>
  )
}

export default AddTask