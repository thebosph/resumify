import { StyleSheet, Font } from "@react-pdf/renderer";

// register font roboto
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "../fonts/Roboto-Bold.ttf",
      fontWeight: "bold",
    },
    {
      src: "../fonts/Roboto-Thin.ttf",
      fontWeight: "thin",
    },
    {
      src: "../fonts/Roboto-Medium.ttf",
      fontWeight: "medium",
    },
  ],
});

export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",

    paddingHorizontal: 42,
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 52,
  },
  headerLeft: {
    flexDirection: "column",
    justifyContent: "center",
  },
  headerName: {
    fontSize: 40,
    fontFamily: "Roboto",

    fontWeight: "bold",
    color: "#000",
  },
  headerTitle: {
    fontSize: 14,

    color: "#6F7588",
  },
  headerRight: {
    flexDirection: "column",
    justifyContent: "center",
  },
  headerContact: {
    fontSize: 10,
    color: "#6F7588",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#6F7588",
    marginTop: 25,
  },
  lineVertical: {
    width: 1,
    height: "100%",
    backgroundColor: "#6F7588",
    marginLeft: 25,
    marginRight: 25,
  },
  bodySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 52,
  },
  bodyLeft: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "75%",
    letterSpacing: 0.5,
  },
  bodyLeftSection: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bodyLeftSectionTitle: {
    fontSize: 15,
    color: "#6F7588",
    textDecoration: "underline",
  },
  bodyLeftSectionContent: {
    fontSize: 10,
    color: "#000",
    marginTop: 10,
  },
  bodyLeftSectionContentTitle: {
    fontSize: 13,
    color: "#484848",
    fontWeight: "bold",
    marginTop: 5,
  },
  bodyLeftSectionContentCompany: {
    fontSize: 15,
    color: "#000",
  },
  bodyLeftSectionContentDate: {
    fontSize: 10,
    color: "#000",
    marginTop: 5,
  },
  bodyLeftSectionContentDescription: {
    fontSize: 10,
    color: "#000",
    marginTop: 5,
  },
  bodyRight: {
    flexDirection: "column",

    width: "25%",
  },
  bodyRightSection: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bodyRightSectionTitle: {
    fontSize: 15,
    color: "#6F7588",
    textDecoration: "underline",
  },
  bodyRightSectionSubtitle: {
    fontSize: 12,
    color: "#000",
    marginTop: 5,
  },
  bodyRightSectionContent: {
    fontSize: 10,
    color: "#000",
    marginTop: 10,
  },
  bodyRightSectionContentTitle: {
    fontSize: 10,
    color: "#000",
    fontWeight: "bold",
  },
  bodyRightSectionContentDescription: {
    fontSize: 10,
    color: "#000",
  },

  curriculumVitae: {
    flexDirection: "column",
    marginTop: 20,
  },
  curriculumVitaeTitle: {
    fontSize: 15,
    color: "#6F7588",
    textDecoration: "underline",
  },
  curriculumVitaeText: {
    fontSize: 10,
    color: "#000",
    marginBottom: 20,
    marginTop: 10,
  },
});
