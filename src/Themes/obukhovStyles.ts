import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingVertical: 50,
  },

  //Lines

  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  listDecoration: {
    width: 10,
    height: 10,
    backgroundColor: "#CCCCCC",
    borderRadius: 5,
    marginRight: 5,
  },

  //Left Side

  left: {
    flex: 1,
    flexDirection: "column",
    paddingRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
  //Left Side Contact Section

  contact: {
    flexDirection: "column",
    marginBottom: 20,
    marginTop: 20,
  },

  //Left Side Skilss Section
  skills: {
    flexDirection: "column",
    marginBottom: 20,
    marginTop: 20,
  },
  //Left Side Education Section
  education: {
    flexDirection: "column",
    marginBottom: 20,
    marginTop: 20,
  },

  //Left Side Languages Section
  language: {
    flexDirection: "column",
    marginBottom: 20,
    marginTop: 20,
  },
  //Right Side
  right: {
    flex: 2,
    flexDirection: "column",
  },
  headerText: {
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 20,
    color: "#6F7588",
  },
  location: {
    fontSize: 10,
    color: "#6F7588",
  },

  //Right Side About Section
  about: {
    flexDirection: "column",
    marginBottom: 35,
    marginTop: 20,
  },

  //Right Side Experience Section
  experience: {
    flexDirection: "column",
    marginBottom: 35,
    marginTop: 20,
  },
});
