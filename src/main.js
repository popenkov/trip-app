import { createContentSortTemplate } from "./components/content-sort";
import { createEventsContainerTemplate } from "./components/event-container";
import { createFilterTemplate } from "./components/filter";
import { createAddFormElement } from "./components/form-add";
import { createSiteMenuTemplate } from "./components/site-menu";
import { createTripInfoTemplate } from "./components/trip-info";
import { render, RenderPosition } from "./utils/render";
import { getEventsData } from "./mock/event";
import { menuValues } from "./mock/menu";
import { filtersNames } from "./mock/filter";
import {
  CITIES,
  OPTIONS,
  TYPES_OF_ACTIVITY,
  TYPES_OF_TRANSFER,
} from "./consts";

const EVENT_COUNT = 16;
const eventsData = getEventsData(EVENT_COUNT);
const getCities = () => {
  return eventsData.map((event) => event.city);
};

const getDatesStart = () => {
  return eventsData.map((event) => new Date(event.start));
};

const getDatesEnd = () => {
  return eventsData.map((event) => new Date(event.end));
};

const tripDaysDates = new Set(
  getDatesStart().map((date) => `${date}`.slice(4, 10))
);

const getPrice = () => {
  const tripPrices = eventsData
    .map((event) => event.price)
    .reduce((a, b) => a + b);
  const offersPrices = eventsData
    .map((event) =>
      Array.from(event.offers).reduce((a, b) => {
        return a + b.price;
      }, 0)
    )
    .reduce((a, b) => a + b);
  return tripPrices + offersPrices;
};

const siteHeaderElement = document.querySelector(".trip-main");
const siteHeaderControlsElement = siteHeaderElement.querySelector(
  ".trip-main__trip-controls"
);
const siteMainElement = document.querySelector(".page-main");
const siteMainContentElement = siteMainElement.querySelector(".trip-events");

const renderHeader = () => {
  render(
    siteHeaderElement,
    createTripInfoTemplate(getCities(), getDatesStart(), getDatesEnd()),
    RenderPosition.AFTERBEGIN
  );
  render(siteHeaderControlsElement, createSiteMenuTemplate(menuValues));
  render(siteHeaderControlsElement, createFilterTemplate(filtersNames));
};

const renderEvents = () => {
  render(siteMainContentElement, createContentSortTemplate());
  render(siteMainContentElement, createAddFormElement());

  render(
    siteMainContentElement,
    createEventsContainerTemplate(
      eventsData,
      tripDaysDates,
      TYPES_OF_TRANSFER,
      TYPES_OF_ACTIVITY,
      CITIES,
      OPTIONS
    )
  );
};

renderHeader();
renderEvents();
