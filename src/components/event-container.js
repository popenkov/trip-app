import { createEventsDayTemplate } from "./event-day.js";

export const createEventsContainerTemplate = (
  events,
  dates,
  transfer,
  activity,
  cities,
  options
) => {
  return `<ul class="trip-days">
  ${Array.from(dates)
    .map((date, index) => {
      const dayEvents = events.filter((event) => {
        const eventDate = `${new Date(event.start)}`.slice(4, 10);
        return eventDate === date;
      });
      return createEventsDayTemplate(
        index,
        date,
        dayEvents,
        transfer,
        activity,
        cities,
        options
      );
    })
    .join(``)}
</ul>`;
};
