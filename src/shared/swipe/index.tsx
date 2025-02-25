import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const SwipeableRow = ({ children, onOpen, onMark }) => {
  const translateX = useSharedValue(0);
  const BUTTON_WIDTH = width * 0.4; // 40% of the row width
  const SWIPE_WIDTH = width * 0.8; // 60% of the row width

  // Swipe Gesture
  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = Math.max(-BUTTON_WIDTH, Math.min(0, event.translationX));
    })
    .onEnd(() => {
      if (translateX.value < -BUTTON_WIDTH / 2) {
        translateX.value = withTiming(-BUTTON_WIDTH, { duration: 200 }); // Open swipe actions
      } else {
        translateX.value = withTiming(0, { duration: 200 }); // Close swipe actions
      }
    });

  // Animated Styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.rowContainer}>
      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.openButton} onPress={onOpen}>
          <Text style={styles.buttonText}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.markButton} onPress={onMark}>
          <Text style={styles.buttonText}>Mark</Text>
        </TouchableOpacity>
      </View>

      {/* Swipeable Content */}
      <GestureDetector gesture={swipeGesture}>
        <Animated.View style={[styles.swipeContent, animatedStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 10,
  },
  swipeContent: {
    width: "100%", // 60% width
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    elevation: 2,
  },
  actionsContainer: {
    flexDirection: "row",
    width: width * 0.4, // 40% width
    position: "absolute",
    right: 0,
    height: "100%",
  },
  openButton: {
    flex: 1,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
  },
  markButton: {
    flex: 1,
    backgroundColor: "#28a745",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SwipeableRow;
