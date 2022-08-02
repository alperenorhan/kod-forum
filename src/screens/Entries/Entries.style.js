import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkbg,
  },
  header: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 22,
  },
  categories: {
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 20,
    marginTop: 50,
  },
  logo: {
    width: 75,
    height: 75,
  },
});
