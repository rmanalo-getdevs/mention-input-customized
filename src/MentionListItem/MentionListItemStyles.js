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
    height: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#E7EAEA",
    padding: 5
  },
  text: {
    alignSelf: "center"
  },
  title: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.8)",
    flexDirection: "column"
  },
  thumbnailWrapper: {
    width: 35,
    height: 35
  },
  thumbnailChar: {
    fontSize: 16
  }
});
