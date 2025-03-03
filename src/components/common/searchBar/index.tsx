import React, { useRef } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/color";

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
  marginT?: number;
  marginB?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, setSearchText, marginB, marginT }) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = useRef<TextInput>(null);

  const focusInput = () => setIsFocused(true);

  const cancelSearch = () => {
    setSearchText("");
    setIsFocused(false);
    inputRef.current?.blur();
  };

  return (
    <View style={[styles.container, { marginTop: marginT, marginBottom: marginB }]}>
      <View style={[styles.inputContainer, { width: isFocused ? "80%" : "100%" }]}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
          onFocus={focusInput}
        />
      </View>
      {isFocused && (
        <TouchableOpacity onPress={cancelSearch} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: "100%",
  },
  cancelButton: {
    marginLeft: 10,
    padding: 10,
  },
  cancelText: {
    fontFamily:'i500',
    color: Colors.shadeBlue,
    textAlign:'center'
  },
});

export default SearchBar;
