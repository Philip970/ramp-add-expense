import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  icon: string;
  title: string;
};

const ExpenseItem = ({ icon, title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Feather name={icon} size={20} color="#f8f9fa" />
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 20,
  },
  title: {
    color: "#f8f9fa",
  },
});
