import React, { useState } from "react";
import { StyleSheet, StatusBar, Dimensions, Image, TouchableHighlight, ImageBackground, Animated, View } from "react-native";
import { Block, Text } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import Constants, { COLOR_THEME } from "./constants";
import { getEasyMovie, getMediumMovie, getHardMovie, getRandomMovie } from "./utils";

const COLORS = COLOR_THEME['THEME_RED'];

export default function App() {
  const [movieName, setMovieName] = useState("CHOOSE DIFFICULTY");
  const handleRandomButton = () => setMovieName(getRandomMovie());

  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
          source={require("./assets/background_1.jpg")}
          style={{ height, width }}
      >
      <Block flex style={styles.headerBox}>
        {/* DISPLAY IMAGE */}
        <Block center>
          <Image
            style={styles.headingImage}
            source={require("./assets/header_title.png")}
            resizeMode={"cover"}
          />
          <Image
            style={styles.logo}
            source={require("./assets/image_2.png")}
            resizeMode={"cover"}
          />
        </Block>

        {/* DISPLAY FILL BOX */}
        <Block style={styles.displayFillBox}>
          <Text style={styles.displayFillText}>{movieName}</Text>
        </Block>

        {/* BUTTONS LIST */}
        <Block>
          <Block style={styles.ButtonListLine1} center>
            <TouchableHighlight onPress={handleRandomButton}  style = {styles.button}>
              <Text style = {styles.buttonText}> G E N E R A T E </Text>
            </TouchableHighlight>
          </Block>
        </Block>
      </Block>
      </ImageBackground>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
  },


  buttonText: {
    color: 'white'
  },
  button: {
    color: COLORS.TEXT,
    backgroundColor: COLORS.PRIMARY,
    fontSize: 15,
    padding: '5%',
    width: width/1.5,
    margin: '3%',
    borderRadius: 5,
    alignItems: 'center',
    fontFamily: Constants.FONT_DEFAULT,
  },
  headerBox: {
    zIndex: 2,
    marginTop: "20%",
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    zIndex: 2,
    position: "relative",
    margin: "7%",
  },
  title: {
    marginTop: "-5%",
  },
  titleText: {
    color: COLORS.TEXT,
    fontSize: 30,
    fontFamily: Constants.FONT_DEFAULT,
  },
  ButtonListLine1: {
    marginTop: "10%",
    flexDirection: "row",
  },
  ButtonListLine2: {
    flexDirection: "row",
  },
  displayFillBox: {
    height: "20%",
    width: "80%",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "5%",
    paddingBottom: "5%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "2%",
    marginBottom: "2%",
    // borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
    color: COLORS.PRIMARY,
    // textAlign: "center",
    alignItems: "center",
  },
  displayFillText: {
    color: COLORS.TEXT,
    fontFamily: Constants.FONT_DEFAULT,
    fontSize: 25,
  },
  headingImage: {
    width: width * 0.6,
    height: width * 0.1,
  },
});




// button: {
//   color: COLORS.TEXT,
//   backgroundColor: COLORS.PRIMARY,
//   fontSize: 15,
//   width: "35%",
//   paddingLeft: "2%",
//   paddingRight: "2%",
//   paddingTop: "5%",
//   paddingBottom: "5%",
//   marginLeft: "4%",
//   marginRight: "4%",
//   marginTop: "2%",
//   marginBottom: "2%",
//   // borderWidth: 0.5,
//   // borderColor: "white",
//   borderRadius: 5,
//   textAlign: "center",
//   fontFamily: Constants.FONT_DEFAULT,
// },