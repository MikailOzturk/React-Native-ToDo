import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 4,
    color: "#666",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: "#ddd",
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 18,
    marginTop: 32,
  },
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "lightblue",
    borderRadius: 6,
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 8,
  },
  buttonText: {
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 32,
  },
  taskContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskText: {
    fontSize: 18,

  },
  taskDelete: {
    width: 23,
    height: 23,
    borderRadius: 13,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",

  },
  taskDeleteText: {
    fontSize: 18,
    color: "white",
  },




});