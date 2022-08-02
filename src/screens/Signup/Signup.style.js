import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkbg,
  },
  logo: {
    width: 144,
    height: 144,
    marginBottom: 10,
  },
  header_text: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 36,
  },
  header: {
    marginTop: 60,
    marginBottom: 100,
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },
  text_container: {
    marginBottom: 20,
  },
  signupform: {
    justifyContent: "center",
    flex: 1,
    marginTop: 70,
    marginBottom: 100,
  },
  buttons: {
    marginTop: 50,
    flex: 1,
  },
});
