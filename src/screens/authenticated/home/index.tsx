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

const Home = ({navigation}: AUTHENTICATED_PROPS) => {
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  const [lists, setLists] = useState([
    { name: "Work", color: "#007AFF", icon: "sun", count: 0 },
    { name: "But", color: "#FF3B30", icon: "desktop", count: 0 },
  ]);

  const addNewList = (newList) => {
    setLists([...lists, newList]); // Append new list
  };

  return (
    <Container padX={hp(2)}>
      <Title textA={'left'} font={'i700'} variant={'titleMedium'} textT={'uppercase'}>Task me</Title>
      <SearchBar marginT={hp(1)} searchText={searchText} setSearchText={setSearchText} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:hp(2)}} style={{  marginTop: hp(2), flex:1}}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', rowGap: hp(2) }}>
          {taskList.map((item, index) => (
            <Button key={index} ph={hp(1)} pv={hp(1)} justContent='space-between' flexD='row' itemAlign='center' width={'48%'} borderR={hp(2)} bg={Colors.lightGray} borderW={hp(.1)} borderC={Colors.mediumGray}>
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
          <FlatList
            data={lists}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
                <View style={{
                  width: 32, height: 32, borderRadius: 16, backgroundColor: item.color, justifyContent: "center", alignItems: "center", marginRight: 10
                }}>
                  <FontAwesome5 name={item.icon} size={16} color="white" />
                </View>
                <Text style={{ fontSize: 16, flex: 1 }}>{item.name}</Text>
                <Text style={{ fontSize: 16, color: "#A1A1A1" }}>{item.count}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <Button flexD='row' itemAlign='center' press={() => setModalVisible(true)}>
        <View style={{padding:hp(1), backgroundColor:Colors.shadeBlue, borderRadius:hp(6)}}>
          <MaterialIcons name="add" size={hp(3)} color={Colors.white} />
        </View>
        <Text variant='titleMedium' style={{color:Colors.shadeBlue, fontFamily:'i900', paddingLeft:hp(1)}}>Add List</Text>
      </Button>
      <ListCreationModal visible={modalVisible} onClose={() => setModalVisible(false)} addNewList={addNewList} />
    </Container>
  )
}

export default Home
