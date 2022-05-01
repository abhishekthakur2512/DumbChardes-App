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
    WHITE: '#FFFFFF',
    OFFWHITE: '#F8F0E3'
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

export const HEADER_TEXT = '🄳🅄🄼🄱 🄲🄷🄰🅁🄰🄳🄴🅂';
// export const HEADER_TEXT = '🅳🆄🅼🅱 🅲🅷🅰🆁🅰🅳🅴🆂';
// export const HEADER_TEXT = 'ᕲ ᑘ ᘻ ᗷ   ᑢ ᕼ ᗩ ᖇ ᗩ ᕲ ᘿ S';

export enum DIFFICULTY {
  EASY,
  HARD
}

export const HOW_TO_PLAY_HEADING = 'HOW TO PLAY\nHOWW';
export const HOW_TO_PLAY_CONTENT = '1 vs Many';


export default Constants;
