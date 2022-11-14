const TIME_IN_MS = 60 * 60 * 24 * 1000;

export const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomDate = (days) => {
  return Date.now() + (getRandomInteger(0, days * 24) * TIME_IN_MS) / 24;
};

export const getRandomElement = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

export const getPhotos = (min, max) => {
  const newArray = [];
  const newArrayLength = getRandomInteger(min, max);
  for (let i = 0; i < newArrayLength; i++) {
    newArray.push(`http://picsum.photos/300/150?r=${Math.random()}`);
  }
  return newArray;
};

export const getRandomArray = (min, max, array) => {
  const newArray = [];
  const newArrayLength = getRandomInteger(min, max);
  for (let i = 0; i < newArrayLength; i++) {
    newArray.push(getRandomElement(array));
  }
  return newArray;
};

// convert string to DOM element
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  // skip TextNodes
  let firstChild = newElement.firstChild;
  while (firstChild != null && firstChild.nodeType == 3) {
    firstChild = firstChild.nextSibling;
  }
  return firstChild;
};

export const InsertionPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const getUniqDates = (eventsData) => {
  return Array.from(new Set(eventsData.map((eventData) => eventData.date)));
};

export const getCities = (eventsData) => {
  return eventsData.map((event) => event.city);
};

export const formatDate = (date) => {
  let dd = date.getDate();
  if (dd < 10) {
    dd = `0` + dd;
  }
  let mm = date.getMonth() + 1;
  if (mm < 10) {
    mm = `0` + mm;
  }
  let yy = date.getFullYear() % 100;
  if (yy < 10) {
    yy = `0` + yy;
  }
  return dd + `.` + mm + `.` + yy;
};
