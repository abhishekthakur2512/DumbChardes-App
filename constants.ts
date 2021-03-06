import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get("screen");


const Constants = {
  COLOR: {
    PRIMARY: "#000000",
    WHITE: "#fff",
    BLACK: "#000",
  },
  FONT_DEFAULT: "sans-serif-light",
};

export const COLOR_THEME = {
  'THEME_RED': {
    PRIMARY: '#e34660',
    PRIMARY_LIGHT: '',
    PRIMARY_DARK: '',
    SECONDARY: '#810000',
    SECONDARY_LIGHT: '',
    SECONDARY_DARK: '',
    TEXT: '#FFFFFF',
    BACKGROUND: '#1c080b',
    BLACK: '#000B19',
    WHITE: '#FFFFFF'
  }
}

export const COLORS = COLOR_THEME['THEME_RED'];

export const stopwatchOptionsCss = {
    container: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: '7%',
      marginBottom: '7%',
      borderRadius: 7,
      alignItems: 'center',
      color: COLORS.PRIMARY,
      backgroundColor: COLORS.PRIMARY,
    },
    text: {
      fontSize: 25,
      color: '#FFF',
      marginLeft: 7,
    },
}

export const HEADER_TEXT = 'π³ππΌπ± π²π·π°ππ°π³π΄π';
// export const HEADER_TEXT = 'π³ππΌπ± π²π·π°ππ°π³π΄π';
// export const HEADER_TEXT = 'α² α α» α·   α’ αΌ α© α α© α² αΏ S';

export enum DIFFICULTY {
  EASY,
  HARD
}
export default Constants;
