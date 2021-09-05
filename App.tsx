import React, { useState } from "react";
import { StyleSheet, Switch, StatusBar, Dimensions, Image, TouchableHighlight, ImageBackground, Animated, View } from "react-native";
import { Block, Text } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import Constants, { COLORS, COLOR_THEME, DIFFICULTY, HEADER_TEXT, stopwatchOptionsCss } from "./constants";
// import { getRandomMovie } from "./utils";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { getEasyMovie, getHardMovie, getImageUrl } from "./movie_list";
// import { getImageUrl } from './utils';

export default function App() {
  const [movieObject, setMovieObject] = useState({title: 'C L I C K    B E L O W', year: ' ', posterurl: ' '});
  const handleRandomButton = () => {
    const movie = difficulty === DIFFICULTY.EASY ? getEasyMovie() : getHardMovie()
    setMovieObject(movie);
  }
  const handleStartButton = () => {
    setIsStopWatchShow(true);
    setStopwatchStart(!stopwatchStart);
    setStopwatchReset(false);
  };
  const handleResetButton = () => {
    setIsStopWatchShow(true);
    setStopwatchStart(false);
    setStopwatchReset(true);
  }
  const onChangeDifficulty = () => {
    difficulty === DIFFICULTY.EASY ? 
    setDifficulty(DIFFICULTY.HARD) :
    setDifficulty(DIFFICULTY.EASY)
  }
  const onHiddenToggle = () => {
    setIsHidden(!isHidden);
  }
  
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [isStopwatchShow, setIsStopWatchShow] = useState(false);
  const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY);
  const [isHidden, setIsHidden] = useState(false);

  const getLogo = () => {
    return ( 
      <Block center>
        <Image
          style={styles.logo}
          source={require("./assets/image_2.png")}
          resizeMode={"cover"}
        />
      </Block>
    )
  }

  const getStopwatch = () => {
    return (
      <Block style = {{alignItems: 'center'}}>
        <Stopwatch laps msecs 
          start = { stopwatchStart }
          reset = { stopwatchReset }
          options = { stopwatchOptionsCss }/>
      </Block>
    )
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

        {/* STOP WATCH AND LOGO BLOCK */}

        { isStopwatchShow ? getStopwatch() : getLogo()}

        {/* <Block center>
          <Image
            style={styles.logo}
            source={require("./assets/image_2.png")}
            resizeMode={"cover"}
          />
        </Block>

        <Block style = {{alignItems: 'center'}}>
          <Stopwatch laps msecs 
            start = { stopwatchStart }
            reset = { stopwatchReset }
            options = { stopwatchOptionsCss }/>
        </Block> */}

        <View style={styles.toggle}>
          {
            difficulty === DIFFICULTY.EASY ?
            <Text style={styles.difficultyText}> EASY </Text>:
            <Text style={styles.difficultyText}> HARD </Text> 
          }
          <Switch 
            trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={true ? COLORS.PRIMARY : COLORS.WHITE } ios_backgroundColor="#3e3e3e"
            onChange={onChangeDifficulty} value = {difficulty === DIFFICULTY.HARD ? true : false }
          />
          <Text style={styles.difficultyText}>  HIDE </Text>
          <Switch 
            trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={true ? COLORS.PRIMARY : COLORS.WHITE } ios_backgroundColor="#3e3e3e"
            onChange={onHiddenToggle} value = {isHidden ? true : false }
          />
        </View>

        {/* DISPLAY FILL BOX */}
        { !isHidden ? (
              <Block style={styles.displayFillBox1}>
                <Text style={styles.displayFillText}>{movieObject.title}</Text>
                <Text style={styles.displayFillText}>{movieObject.year}</Text>
              </Block>
          ):(<Text></Text>) }
        { !isHidden ? (
            <Image source={getImageUrl(movieObject.posterurl)} style = {styles.poster} />
          ):(<Text></Text>) }
        


        {/* BUTTONS LIST */}
        <Block>
          <TouchableHighlight 
          onPress={handleRandomButton}  
          style = {styles.button}>
            <Text style = {styles.buttonText}> G E N E R A T E </Text>
          </TouchableHighlight>
          <Block style = {styles.stopWatchBox}>
            <Text style = {styles.stopwatchText}> S T O P W A T C H </Text>
            <Block style = {{flexDirection: "row", alignSelf: 'center'}}>
              <TouchableHighlight onPress={handleStartButton}  style = {styles.clockButton}>
                {
                  stopwatchStart ? 
                  <Text style = {styles.clockButtonText}> S T O P </Text> :
                  <Text style = {styles.clockButtonText}> S T A R T </Text>
                }
              </TouchableHighlight>
              
              <TouchableHighlight onPress={handleResetButton}  style = {styles.clockButton}>
                <Text style = {styles.clockButtonText}> R E S E T </Text>
              </TouchableHighlight>
            </Block>
          </Block>
          {/* <TouchableHighlight onPress={handleRandomButton}  style = {styles.button}>
            <Text style = {styles.buttonText}> S T O P W A T C H </Text>
          </TouchableHighlight> */}
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


