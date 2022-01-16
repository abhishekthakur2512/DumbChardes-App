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
  'BROWN_RED': {
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

export const COLORS = COLOR_THEME['BROWN_RED'];

export const HEADER_TEXT = 'DRINKING GAME';

export default Constants;
