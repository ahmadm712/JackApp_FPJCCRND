import { StyleSheet } from "react-native";

export const colors = {
  primary: "#fff",
  secondary: "#adadad",
  tertiary: "#8759F2",
  thrid:"#FF3E80",
  alternative: "#666",
  fb: "#39559f",
  disabled: "#8759F2"
};

export const basic = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover"
  }
});

export const form = StyleSheet.create({
  field: {
    padding: 15,
    paddingVertical: 14,
    position: "relative"
  },
  heading: {
    marginTop:24,
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 0
  },
  label: {
    color: colors.secondary
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
    paddingVertical: 10,
    fontWeight: "bold",
    letterSpacing: 1,
    fontSize: 15
  },
  eye: {
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 25,
    color: colors.secondary,
    padding: 20,
    paddingRight: 15
  },
  terms: {
    fontWeight: "bold",
    color: colors.tertiary,
    fontSize: 16,
    padding: 5
  },
  button: {
    borderRadius: 5,
    alignContent: "center",
    backgroundColor: colors.tertiary,
    padding: 15
  },
  button2: {
    borderRadius: 5,
    alignContent: "center",
    backgroundColor: colors.thrid,
    padding: 15
  },
  disabled: {
    backgroundColor: colors.disabled
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 15
  },
  button1: {
    backgroundColor: colors.primary,
    padding: 15
  },
  field1: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    color: colors.secondary,
    fontSize: 15
  },
  buttonText1: {
    fontWeight: "bold",
    color: colors.thrid,
    fontSize: 15
  },
  google: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    borderWidth: 1
  },
  icon: {
    position: "absolute",
    top: 8,
    left: 15,
    paddingLeft: 0
  },
  fb: {
    backgroundColor: colors.fb
  },
  message: {
    textAlign: "center",
    fontSize: 13,
    color: "tomato"
  }
});