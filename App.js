import React, { useState } from "react";
import { StyleSheet, StatusBar, Dimensions, Image, TouchableHighlight, ImageBackground, Animated, View } from "react-native";
import { Block, Text } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import Constants, { COLOR_THEME } from "./constants";
import { getEasyMovie, getMediumMovie, getHardMovie, getRandomMovie } from "./utils";
import { getImageUrl } from './utils';
const COLORS = COLOR_THEME['THEME_RED'];

export default function App() {
  const [movieObject, setMovieObject] = useState({title: 'CLICK BELOW'});
  const handleRandomButton = () => setMovieObject(getRandomMovie());

  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
          source={require("./assets/background_4.jpg")}
          style={{ height, width }}
      >
      <Block flex style={styles.headerBox}>
        {/* DISPLAY IMAGE */}
        <Text style = {styles.headerText}>ᕲ ᑘ ᘻ ᗷ   ᑢ ᕼ ᗩ ᖇ ᗩ ᕲ ᘿ S</Text>
        <Block center>
          {/* <Image
            style={styles.headingImage}
            source={require("./assets/header_title.png")}
            resizeMode={"cover"}
          /> */}
          <Image
            style={styles.logo}
            source={require("./assets/image_2.png")}
            resizeMode={"cover"}
          />
        </Block>

        {/* DISPLAY FILL BOX */}
        <Block style={styles.displayFillBox1}>
          <Text style={styles.displayFillText}>{movieObject.title}</Text>
          <Text style={styles.displayFillText}>{movieObject.year}</Text>
        </Block>
        <Image source={getImageUrl(movieObject.posterurl)} style = {styles.poster} />

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
    marginTop: "15%",
  },
  headerText: {
    alignSelf: 'center',
    color: COLORS.WHITE,
    fontSize: 25
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    position: "relative",
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
  
  displayFillBox1: {
    marginLeft: "10%",
    marginRight: "10%",
    color: COLORS.PRIMARY,
    alignItems: "center",
  },
  displayFillText: {
    color: COLORS.TEXT,
    fontFamily: Constants.FONT_DEFAULT,
    fontSize: 25,
    marginBottom: '3%'
  },
  headingImage: {
    width: width * 0.6,
    height: width * 0.1,
  },
  poster: {
    height: '30%',
    width: '40%',
    resizeMode: "contain",
    alignSelf: 'center'
  }
});




