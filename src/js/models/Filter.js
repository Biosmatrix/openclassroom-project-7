export default class Filter {
  constructor(restaurants, rating) {
    this.rating = rating;
    this.restaurants = restaurants;
  }

  getResults() {
    try {
      this.result = this.filterRating(this.rating);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  }

  // eslint-disable-next-line consistent-return
  filterRating(rating) {
    if (rating === '1') {
      return this.restaurants.filter(restaurant => restaurant.rating >= 1 && restaurant.rating < 2);
    } if (rating === '2') {
      return this.restaurants.filter(restaurant => restaurant.rating >= 2 && restaurant.rating < 3);
    } if (rating === '3') {
      return this.restaurants.filter(restaurant => restaurant.rating >= 3 && restaurant.rating < 4);
    } if (rating === '4') {
      return this.restaurants.filter(restaurant => restaurant.rating >= 4 && restaurant.rating < 5);
    } if (rating === '5') {
      return this.restaurants.filter(restaurant => restaurant.rating === 5);
    } if (rating === '*') {
      return this.restaurants;
    }
  }
}
