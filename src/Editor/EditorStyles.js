import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "green",
    borderWidth: 1,
    width: "100%",
    height: "100%"
  },
  textContainer: {
    alignSelf: "stretch",
    position: "relative"
  },
  input: {
    fontSize: 14,
    color: "#000",
    fontWeight: "400",
    paddingHorizontal: 20,

    position: "absolute",
    top: 0,
    color: "transparent",
    alignSelf: "stretch",
    width: "100%"
  },
  formmatedTextWrapper: {
    position: "absolute",
    top: 0,
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "100%"
  },
  formmatedText: {
    fontSize: 16,
    fontWeight: "400"
  },
  mention: {
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: "transparent",
    color: "#000"
  },
  placeholderText: {
    color: "rgba(0, 0, 0, 0.1)",
    fontSize: 16
  }
});
