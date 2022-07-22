import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    with: "100%",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  submit:{
    width: '100%',
    color: 'red'
  },
});
