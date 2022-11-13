// import { getRandomElement } from "./utils.js";
// import { getRandomArray } from "./utils.js";
// import { getPhotos } from "./utils.js";
// import { getRandomInteger } from "./utils.js";
// import { getRandomDate } from "./utils.js";
import {
  TYPES_OF_EVENT,
  DAYS_COUNT,
  DESCRIPTIONS,
  CITIES,
  OPTIONS,
} from "../consts.js";
import {
  getRandomElement,
  getRandomArray,
  getPhotos,
  getRandomInteger,
  getRandomDate,
} from "../utils.js";

// отдельное событие

const getEvent = () => {
  const type = getRandomElement(TYPES_OF_EVENT);
  const start = getRandomDate(DAYS_COUNT);
  const residual = getRandomInteger(20, 180) * 60 * 1000;
  const residualInHours = residual / 1000 / 60 / 60;
  const hours = Math.trunc(residualInHours);
  const minutes = Math.trunc((residualInHours - hours) * 60);
  return {
    type,
    city: getRandomElement(CITIES),
    price: getRandomInteger(0, 1000),
    description: new Set(getRandomArray(1, 3, DESCRIPTIONS)),
    start,
    end: start + residual,
    hours,
    minutes,
    offers: new Set(getRandomArray(1, 2, OPTIONS)),
    urls: new Set(getPhotos(0, 5)),
  };
};

// все события

export const getEventsData = (count) => {
  const events = new Array(count);
  return events
    .fill(``)
    .map(getEvent)
    .sort((a, b) => a.start - b.start);
};
