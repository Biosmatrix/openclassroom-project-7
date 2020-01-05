import uniqid from 'uniqid';

export default class Review {
  constructor() {
    this.reviews = [];
  }

  // eslint-disable-next-line camelcase
  addReview(author_name, rating, text) {
    const review = {
      id: uniqid(),
      author_name,
      rating,
      text,
    };

    this.reviews.push(review);

    return review;
  }

  deleteReview(id) {
    const index = this.reviews.findIndex(el => el.id === id);

    this.reviews.splice(index, 1);

    // Persist data in localStorage
    this.storeReview();
  }

  isReviewed(id) {
    return this.reviews.findIndex(el => el.id === id) !== -1;
  }

  getNumReviews() {
    return this.reviews.length;
  }

  storeReview() {
    localStorage.setItem('reviews', JSON.stringify(this.reviews));
  }

  getReviews() {
    const storage = JSON.parse(localStorage.getItem('reviews'));

    // Restoring reviews from the localStorage
    if (storage) this.reviews = storage;
  }
}
