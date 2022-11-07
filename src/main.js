import { createContentSortTemplate } from "./components/content-sort";
import { createEventTemplate } from "./components/event";
import { createEventsContainerTemplate } from "./components/event-container";
import { createEventsDayTemplate } from "./components/event-day";
import { createFilterTemplate } from "./components/filter";
import { createEditFormElement } from "./components/form-edit";
import { createSiteMenuTemplate } from "./components/site-menu";
import { createTripInfoTemplate } from "./components/trip-info";
import { render, RenderPosition, EVENTS_COUNT } from "./utils/render";

const siteHeaderElement = document.querySelector(".trip-main");
const siteHeaderControlsElement = siteHeaderElement.querySelector(
  ".trip-main__trip-controls"
);
const siteMainElement = document.querySelector(".page-main");
const siteMainContentElement = siteMainElement.querySelector(".trip-events");

render(siteHeaderElement, createTripInfoTemplate(), RenderPosition.AFTERBEGIN);
render(siteHeaderControlsElement, createSiteMenuTemplate());
render(siteHeaderControlsElement, createFilterTemplate());

render(siteMainContentElement, createContentSortTemplate());
render(siteMainContentElement, createEventsContainerTemplate());

const siteEventsDaysContainerElement =
  siteMainElement.querySelector(".trip-days");
if (siteEventsDaysContainerElement) {
  render(siteEventsDaysContainerElement, createEventsDayTemplate());
}

const siteEventsContainerElement =
  siteMainElement.querySelector(".trip-events__list");
if (siteEventsContainerElement) {
  for (let i = 0; i < EVENTS_COUNT; i++) {
    render(siteEventsContainerElement, createEventTemplate());
  }
}

// форма создания и редактирования маршрута

const eventItemContainer = siteMainElement.querySelector(".trip-events__item");
render(
  siteMainContentElement,
  createEditFormElement(),
  RenderPosition.AFTERBEGIN
);
