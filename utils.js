import {
  EASY_MOVIE_LIST,
  MEDIUM_MOVIE_LIST,
  HARD_MOVIE_LIST,
  RANDOM_MOVIE_LIST,
  MASTER_MOVIE_LIST,
} from "./movie_list";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export function getEasyMovie() {
  const size = EASY_MOVIE_LIST.length;
  const randomIndex = getRandomInt(size);
  return EASY_MOVIE_LIST[randomIndex];
}

export function getMediumMovie() {
  const size = MEDIUM_MOVIE_LIST.length;
  const randomIndex = getRandomInt(size);
  return MEDIUM_MOVIE_LIST[randomIndex];
}

export function getHardMovie() {
  const size = HARD_MOVIE_LIST.length;
  const randomIndex = getRandomInt(size);
  return HARD_MOVIE_LIST[randomIndex];
}

export function getRandomMovie() {
  const size = MASTER_MOVIE_LIST.length;
  const randomIndex = getRandomInt(size);
  return MASTER_MOVIE_LIST[randomIndex];
}
