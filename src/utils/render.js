export const RenderPosition = {
  BEFOREBEGIN: "beforebegin",
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend",
  AFTEREND: "afterend",
};

export const EVENTS_COUNT = 3;

export const render = (
  container,
  template,
  place = RenderPosition.BEFOREEND
) => {
  container.insertAdjacentHTML(place, template);
};
