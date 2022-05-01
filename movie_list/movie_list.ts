import _ from 'lodash';
import Axios from 'axios';
import { shuffle } from "../utils";
import { EASY_MOVIE_LIST } from "./easy";
import { HARD_MOVIE_LIST } from "./hard";

export const RANDOM_MOVIE_LIST = HARD_MOVIE_LIST.concat(
  EASY_MOVIE_LIST,
);

const START = {title: 'C L I C K    B E L O W', year: ' ', posterurl: ' '};
const END = {title: 'F I N I S H E D', year: ' ', posterurl: ' '};

const getShuffledEasyMovieList = () => {
  const x = shuffle(EASY_MOVIE_LIST);
  return [ 
    START,
    ...x,
    END
  ];
};

const getMovieListFromServer = async () => {
  const serverResponse = await Axios.post('https://thakur-backend-server.herokuapp.com/getMovieList');
  return _.get(serverResponse, 'data');
};

const getShuffledHardMovieList = () => {
  const x = shuffle(HARD_MOVIE_LIST);
  return [ 
    START,
    ...x,
    END
  ];
};

export const MOVIE_LIST = {
  getShuffledEasyMovieList,
  getShuffledHardMovieList,
  getMovieListFromServer,
}

export const MASTER_MOVIE_LIST =  [
  ...EASY_MOVIE_LIST,
  ...HARD_MOVIE_LIST
]