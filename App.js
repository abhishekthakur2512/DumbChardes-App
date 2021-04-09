import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  StatusBar,
  Dimensions,
  Image,
  Button,
  ImageBackground,
} from "react-native";
import { Block, theme, Text } from "galio-framework";
const { height, width } = Dimensions.get("screen");
import Theme from "./Theme";
import Utils from "./utils";
import Constants from "./constants";
import {
  getEasyMovie,
  getMediumMovie,
  getHardMovie,
  getRandomMovie,
} from "./utils";

export default function App() {
  console.log("App Started");

  const [difficulty, setDifficulty] = useState("none");
  const movieFill = () => {
    switch (difficulty) {
      case "none":
        return "Click any button below";
      case "easy":
        return getEasyMovie();
      case "medium":
        return getMediumMovie();
      case "hard":
        return getHardMovie();
      case "random":
        return getRandomMovie();
      default:
        return "Something went wrong.";
    }
  };

  const handleEasyButton = () => {
    setDifficulty("easy");
  };
  const handleMediumButton = () => {
    setDifficulty("medium");
  };
  const handleHardButton = () => {
    setDifficulty("hard");
  };
  const handleRandomButton = () => {
    setDifficulty("random");
  };

  return (
    <Block flex style={styles.container}>
      <StatusBar hidden />
      {/* <Block flex>
        <ImageBackground
          source={require("./assets/background_1.jpg")}
          style={{ height, width, zIndex: 1 }}
        />
      </Block> */}

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
          <Text style={styles.displayFillText}>{movieFill()}</Text>
        </Block>

        {/* BUTTONS LIST */}
        <Block>
          <Block style={styles.ButtonListLine1} center>
            <Text style={styles.button} onPress={handleEasyButton}>
              EASY
            </Text>
            <Text style={styles.button} onPress={handleMediumButton}>
              MEDIUM
            </Text>
          </Block>
          <Block style={styles.ButtonListLine2} center>
            <Text style={styles.button} onPress={handleHardButton}>
              HARD
            </Text>
            <Text style={styles.button} onPress={handleRandomButton}>
              RANDOM
            </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },

  button: {
    color: theme.COLORS.WHITE,
    fontSize: 15,
    width: "35%",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "5%",
    paddingBottom: "5%",
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: "2%",
    marginBottom: "2%",
    borderWidth: 0.5,
    borderColor: "white",
    textAlign: "center",
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
    color: theme.COLORS.WHITE,
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
    borderWidth: 2,
    borderColor: theme.COLORS.WHITE,
    textAlign: "center",
    alignItems: "center",
  },
  displayFillText: {
    color: theme.COLORS.WHITE,
    fontFamily: Constants.FONT_DEFAULT,
    fontSize: 25,
  },
  headingImage: {
    width: width * 0.6,
    height: width * 0.1,
  },
});
