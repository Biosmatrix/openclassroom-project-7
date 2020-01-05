// eslint-disable-next-line consistent-return
export const restaurantRatingStars = (el) => {
  if (el) {
    return el.forEach((element) => {
      if (parseInt(element.parentNode.children[5].value, 10) >= parseInt(element.getAttribute('data-rating'), 10)) {
        // eslint-disable-next-line no-sequences
        return element.classList.remove('fa-star-o'), element.classList.add('fa-star');
      }
      // eslint-disable-next-line no-sequences
      return element.classList.remove('fa-star'), element.classList.add('fa-star-o');
    });
  }
};

export const renderRestaurantRatingStars = (el) => {
  if (el) {
    el.forEach((star) => {
      star.addEventListener('click', () => {
        // eslint-disable-next-line no-param-reassign
        star.parentNode.children[5].value = star.getAttribute('data-rating');

        return restaurantRatingStars(el);
      });
    });
  }
};
