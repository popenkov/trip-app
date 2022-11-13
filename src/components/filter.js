export const createFilterTemplate = (filtersNames) => {
  return `  
            <h2 class="visually-hidden">Filter events</h2>
            <form class="trip-filters" action="#" method="get">
            ${filtersNames
              .map(
                (name) => `<div class="trip-filters__filter">
            <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${name.toLowerCase()}" checked>
            <label class="trip-filters__filter-label" for="filter-${name.toLowerCase()}">${name}</label>
            </div>`
              )
              .join(``)}
            <button class="visually-hidden" type="submit">Accept filter</button>
            </form>
        `;
};
