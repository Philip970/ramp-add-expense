import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  COLLAPSED_HEIGHT,
  COLLAPSED_WIDTH,
  EXPANDED_WIDTH,
} from "../screens/expenses";

type Props = {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
};

const AddExpense = ({ isExpanded, setIsExpanded }: Props) => {
  const containerWidth = useSharedValue(COLLAPSED_WIDTH);
  const opacity = useSharedValue(1);
  const rotation = useSharedValue(-45);

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      width: containerWidth.value,
    };
  });

  const rLeftContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const rAddButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  useEffect(() => {
    if (isExpanded) {
      containerWidth.value = withTiming(EXPANDED_WIDTH, {
        duration: 500,
        easing: Easing.exp,
      });
      opacity.value = withTiming(0, {
        duration: 500,
        easing: Easing.exp,
      });
      rotation.value = withTiming(0, {
        duration: 500,
        easing: Easing.exp,
      });
    } else {
      opacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.exp,
      });
      containerWidth.value = withTiming(COLLAPSED_WIDTH, {
        duration: 300,
        easing: Easing.exp,
      });
      rotation.value = withTiming(-45, {
        duration: 300,
        easing: Easing.exp,
      });
    }
  }, [isExpanded]);

  return (
    <Animated.View style={[styles.container, rContainerStyle]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 16,
          alignItems: "center",
          gap: 16,
          width: "100%",
        }}
      >
        <Animated.View style={[styles.leftContainer, rLeftContainerStyle]}>
          <View style={styles.tasksContainer}>
            <Feather name="check-square" size={20} color="#f8f9fa" />
            <Text style={styles.tasks}>Tasks</Text>
          </View>
          <Feather name="layers" size={20} color="#f8f9fa" />
        </Animated.View>
        <TouchableWithoutFeedback onPress={() => setIsExpanded(!isExpanded)}>
          <Animated.View style={rAddButtonStyle}>
            <Feather name="x" size={20} color="#f8f9fa" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#262326",
    height: COLLAPSED_HEIGHT,
    padding: 4,
    gap: 16,
    borderRadius: 24,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    gap: 16,
  },
  tasksContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b393c",
    height: 52,
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 16,
  },
  tasks: {
    color: "#f8f9fa",
  },
});
