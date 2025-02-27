import { FlatList, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Button, Container, SearchBar, Title} from '@/shared/index'
import { AUTHENTICATED_PROPS } from '@/types/authenticatedType'
import { hp } from '@/utils/responsiveHelper'
import { taskList } from './datas'
import { Text } from 'react-native-paper'
import Colors from '@/constants/color'
import {FontAwesome5, MaterialIcons} from "@expo/vector-icons"
import ListCreationModal from './components/list-modal'
import TaskList from './components/task-list'

const Home = ({navigation}: AUTHENTICATED_PROPS) => {
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  const [lists, setLists] = useState<any>([]);

  const addNewList = (newList:any) => {
    setLists([...lists, newList]); // Append new list
  };

  return (
    <Container padX={hp(2)}>
      <Title textA={'left'} font={'i700'} variant={'titleMedium'} textT={'uppercase'}>Task me</Title>
      <SearchBar marginT={hp(1)} searchText={searchText} setSearchText={setSearchText} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:hp(2)}} style={{  marginTop: hp(2), flex:1}}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', rowGap: hp(2) }}>
          {taskList.map((item, index) => (
            <Button press={()=>navigation.navigate(item.path)} key={index} ph={hp(1)} pv={hp(1)} justContent='space-between' flexD='row' itemAlign='center' width={'48%'} borderR={hp(2)} bg={Colors.lightGray} borderW={hp(.1)} borderC={Colors.lightGray}>
              <View style={{}}>
                <View style={{ padding: hp(1), width: hp(4.5), height: hp(4.5), backgroundColor: item.color, borderRadius: hp(6), alignItems: 'center', justifyContent: "center" }}>
                  <item.iconHome name={item.iconName} size={hp(2.2)} color={Colors.white} />
                </View>
                <Text variant='titleMedium' style={{ fontFamily: 'i700', textAlign: 'center' }}>{item.taskType}</Text>
              </View>
              <Text variant='headlineSmall' style={{ fontFamily: 'i700' }}>{item.task.length}</Text>
            </Button>
          ))}
        </View>
        <View style={{paddingTop:hp(2)}}>
          <Title textA={'left'} font={'i700'} variant={'titleMedium'} textT={'capitalize'}>My Lists</Title>
          {lists.length > 0 ? (
            lists.map((item: unknown, index: number)=>(
              <TaskList key={index} index={index} item={item} />
            ))
          ) : (
            <Button bg={Colors.lightGray} p={hp(2)} mt={hp(2)} borderR={hp(2)}>
                <Title font={'i700'} textA={'center'} variant={'titleMedium'}>No list created yet</Title>
            </Button>
          )}
        </View>
      </ScrollView>
      <Button flexD='row' itemAlign='center' pt={hp(1)} press={() => setModalVisible(true)}>
        <View style={{padding:hp(1), backgroundColor:Colors.shadeBlue, borderRadius:hp(6)}}>
          <MaterialIcons name="add" size={hp(3)} color={Colors.white} />
        </View>
        <Text variant='titleMedium' style={{color:Colors.shadeBlue, fontFamily:'i700', paddingLeft:hp(1)}}>Add List</Text>
      </Button>
      <ListCreationModal visible={modalVisible} onClose={() => setModalVisible(false)} addNewList={addNewList} />
    </Container>
  )
}

export default Home
