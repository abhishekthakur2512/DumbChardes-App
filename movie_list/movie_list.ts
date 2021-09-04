import { EASY_MOVIE_LIST } from "./easy";
import { HARD_MOVIE_LIST } from "./hard";

export const RANDOM_MOVIE_LIST = HARD_MOVIE_LIST.concat(
  EASY_MOVIE_LIST,
);

export const MASTER_MOVIE_LIST =  [
  ...EASY_MOVIE_LIST,
  ...HARD_MOVIE_LIST
]