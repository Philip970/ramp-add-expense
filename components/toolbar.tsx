import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, View } from "react-native";

const Toolbar = () => {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={24} color="#6e6969" />
      <Feather name="settings" size={24} color="#6e6969" />
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 16,
  },
});
