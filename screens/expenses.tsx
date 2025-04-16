import { Dimensions, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

import ExpenseList from "../components/expense-list";
import AddExpense from "../components/add-expense";
import Toolbar from "../components/toolbar";

const { width: WINDOW_WIDTH } = Dimensions.get("window");

export const COLLAPSED_WIDTH = 200;
export const EXPANDED_WIDTH = WINDOW_WIDTH - 40;
export const COLLAPSED_HEIGHT = 60;
export const EXPANDED_HEIGHT = 204;

const Expenses = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <View style={styles.container}>
      <Toolbar />
      <View style={styles.indicatorContainer}>
        <AntDesign name="dropbox" size={150} color="#3b393c" />
        <Text>You're all caught up!</Text>
      </View>
      <ExpenseList isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <AddExpense isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f6f1",
    marginTop: 40,
  },
  indicatorContainer: {
    marginTop: 130,
    alignItems: "center",
  },
});

export default Expenses;
