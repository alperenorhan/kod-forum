import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkbg,
  },
  profile_info: {
    marginTop: 36,
    alignItems: "center",
    flex: 1,
  },
  profile_picture: {
    width: 112,
    height: 112,
    borderRadius: 100,
    margin: 12,
  },
  username: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 5,
  },
  title: {
    color: COLORS.white,
    opacity: 0.5,
    fontSize: 15,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
    flex: 1,
  },
  icon: {
    marginRight: 7,
  },
  last_entries_title: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: "3%",
  },
  last_entries: {
    flex: 1,
  },
});
