import { elements } from './base';
import icons from '../../img/icons.svg';
import logo from '../../img/logo.png';
// eslint-disable-next-line import/no-cycle
import { renderStreetViewPhoto } from './streetView';

export const clearResults = () => {
  elements.searchResultList.innerHTML = '';
  elements.searchResultPages.innerHTML = '';
};

export const clearRestaurantInfo = () => {
  elements.reviewsList.innerHTML = '';
  elements.restaurantName.textContent = '';
  elements.restaurantName.textContent = '';
  elements.restaurantAddress.textContent = '';
  elements.restaurantTelephone.textContent = '';
};

// eslint-disable-next-line consistent-return,no-unused-vars
export const createPhoto = restaurant => {
  if (restaurant.photos) {
    const photo = restaurant.photos[0];
    // eslint-disable-next-line no-prototype-builtins
    if (!photo.hasOwnProperty('getUrl')) {
      return `${logo}`;
    }
    return photo.getUrl();
  }
  return `${logo}`;
};

export const restaurantRating = restaurant => {
  const rating = [];

  if (restaurant.rating) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      if (restaurant.rating < i + 1) {
        rating.push('<span class="fa fa-star-o"></span>');
      } else {
        rating.push('<span class="fa fa-star"></span>');
      }
    }

    return rating.join(' ');
  }
  return '<div>No rating found</div>';
};

export const limitTitle = (title, limit = 17) => {
  const newTitle = [];

  if (title.length > limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    // return the result
    return `${newTitle.join(' ')} ...`;
  }

  return title;
};

export const createButton = (
  page,
  type
) => `<button class="btn-inline results__btn--${type}" data-goto=${
  type === 'prev' ? page - 1 : page + 1
}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-triangle-${
  type === 'prev' ? 'left' : 'right'
}"></use>
        </svg>
    </button>`;

export const renderRestaurant = restaurant => {
  const markup = `
                <li class="results__list_item">
                    <div class="results__link">
                        <div class="results__image">
                            <img src="${createPhoto(
                              restaurant
                            )}" alt="${restaurant.name}">
                        </div>
                        <div class="results__text-data">
                            <div class="results____title-container">
                              <div class="results__header">
                                  <h1 class="results__title">${limitTitle(
                                    restaurant.name
                                  )}</h1>
                              </div>
                                <div class="results__rating">
                                  <span class="results__rating-score">${
                                    restaurant.rating
                                      ? restaurant.rating
                                      : ''
                                  }</span>
                                  <span class="results__rating-stars">${restaurantRating(
                                    restaurant
                                  )}</span>
                                  <span class="results__num-ratings">${
                                    restaurant.user_ratings_total
                                      ? `(${restaurant.user_ratings_total})`
                                      : ''
                                  }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                `;

  elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  let button;

  if (page === 1 && pages > 1) {
    // Only button to go to next page
    button = createButton(page, 'next');
  } else if (page < pages) {
    // Both buttons
    button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
  } else if (page === pages && pages > 1) {
    // Only button to go to prev page
    button = createButton(page, 'prev');
  }

  elements.searchResultPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResultsNotFound = () => {
  const markup = `
                <li class="results__notfound text-center">
                    No Restaurant found
                </li>
           `;

  elements.searchResultList.insertAdjacentHTML('afterbegin', markup);
};

export const renderResults = (
  restaurants,
  page = 1,
  resPerPage = 4
) => {
  if (restaurants.length === 0) {
    renderResultsNotFound();

    return;
  }

  if (restaurants.length > 0 && restaurants.length <= resPerPage) {
    restaurants.forEach(renderRestaurant);

    return;
  }

  // render results of current page
  const start = (page - 1) * resPerPage;

  const end = page * resPerPage;

  restaurants.slice(start, end).forEach(renderRestaurant);

  // render pagination buttons
  renderButtons(page, restaurants.length, resPerPage);
};

export const renderNewResults = (
  restaurants,
  page = 1,
  resPerPage = 4
) => {
  // render results of current page
  const start = (page - 1) * resPerPage;

  const end = page * resPerPage;

  restaurants.slice(start, end).forEach(renderRestaurant);

  // render pagination buttons
  renderButtons(page, restaurants.length, resPerPage);
};

export const renderRestaurantInfo = async restaurant => {
  clearRestaurantInfo();

  elements.restaurantInfoModalTitle.textContent = restaurant.name;
  elements.restaurantName.textContent = restaurant.name;
  elements.restaurantAddress.textContent = restaurant.vicinity;
  elements.restaurantTelephone.textContent =
    restaurant.formatted_phone_number;

  await renderStreetViewPhoto(restaurant);
};
