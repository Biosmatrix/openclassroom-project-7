export const elements = {
  map: document.querySelector('#map'),
  panorama: document.querySelector('#panorama'),
  streetViewWindow: document.querySelector('#streetViewWindow'),
  streetViewPhoto: document.querySelector('#streetViewPhoto'),
  photoWindow: document.querySelector('#photoWindow'),
  restaurantInfoModalTitle: document.querySelector(
    '#restaurantInfoModalTitle'
  ),
  restaurantName: document.querySelector('#restaurant_name'),
  restaurantAddress: document.querySelector('#restaurant_address'),
  restaurantTelephone: document.querySelector(
    '#restaurant_telephone'
  ),
  ratings: document.querySelector('.star-rating'),
  reviewForm: document.querySelector('#reviewForm'),
  reviewRatingStar: document.querySelectorAll('#review_rating .fa'),
  filterRatingStar: document.querySelectorAll('.filter .fa'),
  reviewAuthorNameInput: document.querySelector('#author_name'),
  reviewAuthorCommentInput: document.querySelector('#author_comment'),
  reviewRatingStarInput: document.querySelector(
    '#review_rating input.rating-value'
  ),
  starRating: document.querySelector('.star-rating .fa'),
  reviews: document.querySelector('.reviews'),
  reviewsList: document.querySelector('.reviews__list'),
  searchResult: document.querySelector('.results'),
  searchResultList: document.querySelector('.results__list'),
  searchResultItems: document.querySelectorAll('.results__list_item'),
  searchResultPages: document.querySelector('.results__pages'),
  filterButton: document.querySelectorAll('.filter fa'),
  filterInput: document.querySelector('.custom--options')
};

export const elementStrings = {
  restaurantRatingStar: 'restaurant_rating .fa',
  restaurantForm: 'restaurantForm',
  newRestaurantId: 'markerId',
  newRestaurantName: 'restaurantName',
  newRestaurantAddress: 'restaurantAddress',
  newRestaurantRating: 'restaurantRating',
  newRestaurantLat: 'restaurantLocationLat',
  newRestaurantLng: 'restaurantLocationLng'
};

export const render = (template, selector) => {
  const node = document.querySelector(selector);

  if (!node) return;

  node.innerHTML = template;
};

// Create an element with an optional CSS class
export const createElement = (tag, className) => {
  const element = document.createElement(tag);

  if (className) element.classList.add(className);

  return element;
};

// Retrieve an element from the DOM
export const getElement = selector =>
  document.querySelector(selector);
