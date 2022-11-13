export const createSiteMenuTemplate = (values) => {
  return `  
            <h2 class="visually-hidden">Switch trip view</h2>
            <nav class="trip-controls__trip-tabs  trip-tabs">
            ${values
              .map(
                (value) =>
                  `<a class="trip-tabs__btn  ${
                    value.active ? `trip-tabs__btn--active` : ``
                  }" href="#">${value.title}</a>`
              )
              .join(``)}
            </nav>
        `;
};
