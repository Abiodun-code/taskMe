import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { hp } from '@/utils/responsiveHelper'
import Colors from '@/constants/color'

type Props = {
  children: React.ReactNode
  onDelete: () => void
}

const SwipeableItem = ({ children, onDelete }: Props) => {
  const translateX = useSharedValue(0)
  const threshold = -0 // Distance to trigger delete button

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  // SWIPE GESTURE HANDLER
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationX < 0) {
        translateX.value = event.translationX // Allow swipe only left
      }
    })
    .onEnd((event) => {
      if (event.translationX < threshold) {
        translateX.value = withSpring(-100) // Show delete button
      } else {
        translateX.value = withSpring(0) // Reset position
      }
    })

  return (
     <GestureHandlerRootView style={{flex:1}}>
      <View style={styles.container}>
        {/* DELETE BUTTON */}
        <View style={styles.deleteButtonContainer}>
          <TouchableOpacity onPress={() => runOnJS(onDelete)()} style={styles.deleteButton}>
            <Animated.Text style={styles.deleteText}>Delete</Animated.Text>
          </TouchableOpacity>
        </View>

        {/* SWIPEABLE CONTENT */}
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.swipeableContent, animatedStyle]}>
            {children}
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  )
}

export default SwipeableItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    // overflow: 'hidden',
  },
  deleteButtonContainer: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  deleteButton: {
    backgroundColor: Colors.errorRed,
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(3),
    borderRadius: hp(0.5),
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp(2),
  },
  swipeableContent: {
    flex: 1,

  },
})
