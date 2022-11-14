import {
  getRandomElement,
  getRandomArray,
  getPhotos,
  getRandomInteger,
  getRandomDate,
} from "../utils.js";

export const CITIES = [
  `London`,
  `Liverpool`,
  `Birmingham`,
  `Oxford`,
  `Cambridge`,
  `Manchester`,
  `Nottingham`,
  `Sheffield`,
  `Leeds`,
  `Bristol`,
  `Newcastle`,
];
export const DAYS_COUNT = 5;

export const TYPES_OF_TRANSFER = [
  `Bus to`,
  `Drive to`,
  `Flight to`,
  `Ship to`,
  `Taxi to`,
  `Train to`,
  `Transport to`,
];
export const TYPES_OF_ACTIVITY = [
  `Check-in in`,
  `Restaurant in`,
  `Sightseeing in`,
];
export const TYPES_OF_EVENT = TYPES_OF_TRANSFER.concat(TYPES_OF_ACTIVITY);

export const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

export const OPTIONS = [
  {
    id: `luggage`,
    option: `Add luggage`,
    price: 10,
  },
  {
    id: `comfort`,
    option: `Switch to comfort class`,
    price: 150,
  },
  {
    id: `meal`,
    option: `Add meal`,
    price: 2,
  },
  {
    id: `seats`,
    option: `Choose seats`,
    price: 9,
  },
];

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
    description: [...new Set(getRandomArray(1, 3, DESCRIPTIONS))],
    start,
    end: start + residual,
    hours,
    minutes,
    offers: [...new Set(getRandomArray(1, 2, OPTIONS))],
    urls: [...new Set(getPhotos(0, 5))],
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
