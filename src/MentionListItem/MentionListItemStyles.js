import { StyleSheet } from "react-native";

export default StyleSheet.create({
  suggestionItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.1)",
    height: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  text: {
    alignSelf: "center"
  },
  title: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.8)"
  },
  thumbnailWrapper: {
    width: 35,
    height: 35
  },
  thumbnailChar: {
    fontSize: 16
  }
});
