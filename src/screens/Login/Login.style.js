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
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    flex: 1,
  },
  header_text: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 36,
    marginBottom: 35,
  },
  or: {
    color: COLORS.white,
    opacity: 0.6,
    marginVertical: 16,
    textAlign: "center",
  },
  bottom_container: {
    marginHorizontal: 46,
    marginTop: "10%",
    flex: 1,
  },
  accountText: {
    color: COLORS.white,
    opacity: 0.6,
    marginVertical: 10,
  },
  signup: {
    color: COLORS.white,
  },
  buttons: {
    marginTop: "5%",
    flex: 1,
  },
  form: {
    flex: 2,
  },
  texts: {
    flex: 1,
    marginTop: 70,
  },
});
