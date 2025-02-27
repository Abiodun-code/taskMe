import React, { useState } from "react";
import { Modal, View, ScrollView, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, CustomInput, Title } from "@/shared/index";
import { hp } from "@/utils/responsiveHelper";
import Colors from "@/constants/color";
import { colors, icons } from "./listModalData";

type Props = {
  visible: boolean;
  onClose: () => void;
  addNewList: (list: { name: string; color: string; icon: string; }) => void;
};

const ListCreationModal = ({ visible, onClose, addNewList }: Props) => {
  const [listName, setListName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#007AFF");
  const [selectedIcon, setSelectedIcon] = useState("list");

  const handleDone = () => {
    if (!listName.trim()) {
      Alert.alert("List Name Required", "Please enter a list name before saving.");
      return;
    }

    try {
      addNewList({ name: listName, color: selectedColor, icon: selectedIcon });
      setListName(""); // Reset input
      onClose();
    } catch (error) {
      console.error("Error adding list:", error);
      Alert.alert("Error", "Something went wrong while adding the list.");
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" }}>
        <View style={{ backgroundColor:Colors.white, borderRadius: hp(2), width: "95%" }}>
          <Button press={onClose} borderR={hp(1)} p={hp(3)}borderBW={hp(.1)} borderBC={Colors.cloudyGray}>
            <Title font={'i700'} variant={'titleMedium'} textA={'left'}>Cancel</Title>
          </Button>
          <ScrollView contentContainerStyle={{padding:hp(2)}}>
            {/* List Icon Preview */}
            <View style={{ alignItems: "center", marginBottom: hp(2) }}>
              <View style={{ width: hp(9), height: hp(9), borderRadius: hp(5), backgroundColor: selectedColor, justifyContent: "center", alignItems: "center" }}>
                <FontAwesome5 name={selectedIcon} size={hp(4)} color={Colors.white} />
              </View>
            </View>
            {/* List Name Input */}
            <CustomInput placeholder="List Name" label="" value={listName} onChangeText={setListName} bg={Colors.lightGray} bgColor={Colors.lightGray} textAlign="center"/>
            {/* Color Picker */}
            <View style={{ flexDirection: "row", flexWrap: "wrap", rowGap: hp(1), backgroundColor:Colors.lightGray, padding:hp(1.5), borderRadius:hp(2) }}>
              {colors.map((item, index) => (
                <Button key={index} press={() => setSelectedColor(item)}>
                  <View style={{padding: hp(1.9), borderRadius: hp(6), backgroundColor: item, marginRight: hp(1), borderWidth: selectedColor === item ? hp(.2) : 0, borderColor: Colors.black,}}
                  />
                </Button>
              ))}
            </View>
            {/* Icon Picker */}
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: hp(2.5), backgroundColor: Colors.lightGray, padding: hp(1.5), borderRadius: hp(2) }}>
              {icons.map((item, index) => (
                <Button key={index} press={() => setSelectedIcon(item)}>
                  <FontAwesome5 name={item} size={hp(3)} color={selectedIcon === item ? selectedColor : Colors.mediumGray} style={{ margin: hp(1) }} />
                </Button>
              ))}
            </View>
            {/* Done Button */}
            <Button press={handleDone} mt={hp(2.5)} bg={Colors.shadeBlue} p={hp(2)} itemAlign="center">
              <Title font={'i700'} variant={'titleMedium'} color={Colors.white}>Done</Title>
            </Button>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ListCreationModal;
