import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Expenses from "./screens/expenses";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Expenses />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f6f1",
  },
});
