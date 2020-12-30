export default {};

export const EASY_MOVIE_LIST = [
  "EASY_MOVIE_1",
  "EASY_MOVIE_2",
  "EASY_MOVIE_3",
  "EASY_MOVIE_4",
];

export const MEDIUM_MOVIE_LIST = [
  "MEDIUM_MOVIE_1",
  "MEDIUM_MOVIE_2",
  "MEDIUM_MOVIE_3",
  "MEDIUM_MOVIE_4",
  "MEDIUM_MOVIE_5",
];

export const HARD_MOVIE_LIST = [
  "HARD_MOVIE_1",
  "HARD_MOVIE_2",
  "HARD_MOVIE_3",
  "HARD_MOVIE_4",
  "HARD_MOVIE_5",
];

export const RANDOM_MOVIE_LIST = HARD_MOVIE_LIST.concat(
  EASY_MOVIE_LIST,
  MEDIUM_MOVIE_LIST
);
