import React, { useState } from "react";
import { StyleSheet, Switch, StatusBar, Dimensions, Image, TouchableHighlight, ImageBackground, Animated, View } from "react-native";
import { Block, Text } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import Constants, { COLORS, HEADER_TEXT,  } from "./constants";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

export default function App() {
  const handleRandomButton = () => {
    console.log('handle Random Button');
  }

  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
          source={require("./assets/background_4.jpg")}
          style={{ height, width }}
      >
      <Block flex style={styles.headerBox}>
        {/* HEADER TEXT */}
        <Text style = {styles.headerText}>{HEADER_TEXT}</Text>

        <Block>
          <TouchableHighlight 
          onPress={handleRandomButton}  
          style = {styles.button}>
            <Text style = {styles.buttonText}> G E N E R A T E </Text>
          </TouchableHighlight>
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
    color: COLORS.WHITE
  },
  stopWatchBox: {
    marginTop: '2%',
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: '15%',
    marginRight: '15%',
    padding: '3%'
  },
  stopwatchText: {
    color: COLORS.WHITE,
    alignSelf: 'center',
    fontSize: 12
  },
  clockButton: {
    borderRadius: 5,
    backgroundColor: COLORS.PRIMARY,
    margin: '2%',
    padding: '4%'
  },
  clockButtonText: {
    color: COLORS.WHITE,
    fontSize: 10,
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
    alignSelf: 'center'
  },
  headerBox: {
    zIndex: 2,
    marginTop: "12%",
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
    alignSelf: 'center',
    marginBottom: '5%'
  },
  toggle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'center',
    marginBottom: 5
  },
  difficultyText: {
    color: COLORS.WHITE,
    alignSelf: 'center',
    fontSize: 12
  },
  hideText: {
    
  }
});


