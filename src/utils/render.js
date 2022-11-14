export const RenderPosition = {
  BEFOREBEGIN: "beforebegin",
  AFTERBEGIN: "afterbegin",
  BEFOREEND: "beforeend",
  AFTEREND: "afterend",
};

export const EVENTS_COUNT = 3;

// export const render = (
//   container,
//   template,
//   place = RenderPosition.BEFOREEND
// ) => {
//   container.insertAdjacentHTML(place, template);
// };

export const render = (
  container,
  element,
  position = RenderPosition.BEFOREEND
) => {
  switch (position) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};
