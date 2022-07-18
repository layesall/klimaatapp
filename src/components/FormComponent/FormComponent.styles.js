import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    with: "100%",
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
});
