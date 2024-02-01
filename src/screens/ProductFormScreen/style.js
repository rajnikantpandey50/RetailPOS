import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff", // Added background color
  },
  formContainer: {
    marginVertical: 40,
  },
  input: {
    height: 60,
    borderColor: "#3498db",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 8, // Rounded corners
  },
  inputArea: {
    height: 100,
    borderColor: "#3498db",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 8, // Rounded corners
  },
  buttonContainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});
