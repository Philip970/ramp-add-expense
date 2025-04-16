import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import {
  COLLAPSED_HEIGHT,
  COLLAPSED_WIDTH,
  EXPANDED_HEIGHT,
  EXPANDED_WIDTH,
} from "../screens/expenses";
import ExpenseItem from "./expense-item";

type Props = {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
};

const ExpenseList = ({ isExpanded, setIsExpanded }: Props) => {
  const containerWidth = useSharedValue(COLLAPSED_WIDTH);
  const containerHeight = useSharedValue(COLLAPSED_HEIGHT);
  const opacity = useSharedValue(1);

  const rContainerStyle = useAnimatedStyle(() => {
    return {
      width: containerWidth.value,
      height: containerHeight.value,
    };
  });

  useEffect(() => {
    if (isExpanded) {
      containerWidth.value = withTiming(EXPANDED_WIDTH, {
        duration: 500,
        easing: Easing.exp,
      });
      containerHeight.value = withTiming(EXPANDED_HEIGHT, {
        duration: 500,
        easing: Easing.exp,
      });
      opacity.value = withTiming(0, {
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
      containerHeight.value = withTiming(COLLAPSED_HEIGHT, {
        duration: 300,
        easing: Easing.exp,
      });
    }
  }, [isExpanded]);

  return (
    <Animated.View style={[styles.container, rContainerStyle]}>
      {isExpanded && (
        <Animated.View
          entering={FadeIn.delay(200).duration(500).easing(Easing.bounce)}
          exiting={FadeOut.duration(300)}
          style={styles.items}
        >
          <ExpenseItem icon="camera" title="Capture receipts" />
          <ExpenseItem icon="refresh-cw" title="New reimbursement" />
          <ExpenseItem icon="credit-card" title="Request spend" />
        </Animated.View>
      )}
      <View style={{ height: COLLAPSED_HEIGHT }} />
    </Animated.View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#262326",
    borderRadius: 24,
  },
  items: {
    padding: 20,
    gap: 20,
  },
});
