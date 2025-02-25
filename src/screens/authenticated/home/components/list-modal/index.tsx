import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const colors = ["#FF3B30", "#FF9500", "#FFCC00", "#28CD41", "#007AFF", "#5856D6", "#AF52DE", "#8E8E93", "#D1D1D6", "#C7C7CC"];
const icons = ["list", "bookmark", "gift", "graduation-cap", "book", "desktop", "heart", "home", "music", "gamepad"];

const ListCreationModal = ({ visible, onClose, addNewList }) => {
  const [tab, setTab] = useState("new"); // "new" or "templates"
  const [listName, setListName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#007AFF");
  const [selectedIcon, setSelectedIcon] = useState("list");

  const handleDone = () => {
    if (listName.trim() === "") return;

    addNewList({ name: listName, color: selectedColor, icon: selectedIcon, count: 0 });
    setListName(""); // Reset input
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" }}>
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 15, width: 340 }}>

          {/* Header with Tabs */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
            <TouchableOpacity onPress={() => setTab("new")}>
              <Text style={{ fontSize: 16, fontWeight: tab === "new" ? "bold" : "normal" }}>New List</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTab("templates")}>
              <Text style={{ fontSize: 16, fontWeight: tab === "templates" ? "bold" : "normal" }}>Templates</Text>
            </TouchableOpacity>
          </View>

          {tab === "new" ? (
            <ScrollView>
              {/* List Icon Preview */}
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: selectedColor, justifyContent: "center", alignItems: "center" }}>
                  <FontAwesome5 name={selectedIcon} size={36} color="white" />
                </View>
              </View>

              {/* List Name Input */}
              <TextInput
                placeholder="List Name"
                value={listName}
                onChangeText={setListName}
                style={{
                  backgroundColor: "#F2F2F7", padding: 10, borderRadius: 8, fontSize: 16, textAlign: "center", color: "#000", marginBottom: 10
                }}
              />

              {/* List Type Selection */}
              <TouchableOpacity style={{
                backgroundColor: "#F2F2F7", padding: 10, borderRadius: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10
              }}>
                <Text style={{ fontSize: 16 }}>List Type</Text>
                <Text style={{ fontSize: 16, color: "#007AFF" }}>Standard ⌵</Text>
              </TouchableOpacity>

              {/* Color Picker */}
              <FlatList
                horizontal
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => setSelectedColor(item)} style={{ marginRight: 10 }}>
                    <View style={{
                      width: 32, height: 32, borderRadius: 16, backgroundColor: item,
                      borderWidth: selectedColor === item ? 2 : 0, borderColor: "black"
                    }} />
                  </TouchableOpacity>
                )}
                style={{ marginBottom: 10 }}
              />

              {/* Icon Picker */}
              <FlatList
                numColumns={5}
                data={icons}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => setSelectedIcon(item)} style={{ padding: 10 }}>
                    <FontAwesome5 name={item} size={24} color={selectedIcon === item ? "#007AFF" : "#8E8E93"} />
                  </TouchableOpacity>
                )}
              />

              {/* Done Button */}
              <TouchableOpacity onPress={handleDone} style={{ marginTop: 15, alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: "blue" }}>Done</Text>
              </TouchableOpacity>
            </ScrollView>
          ) : (
            <View>
              <Text>Templates will be added here.</Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ListCreationModal;
