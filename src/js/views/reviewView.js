import { elements } from './base';
// eslint-disable-next-line import/no-cycle,import/named
import { restaurantRating } from './restaurantView';

export const getReviewInputs = () => ({
  restaurant: elements.reviewRestaurantInput.value,
  author: elements.reviewAuthorNameInput.value,
  comment: elements.reviewAuthorCommentInput.value,
  rating: elements.reviewRatingStarInput.value
});

export const clearReviewInputs = () => {
  elements.reviewRestaurantInput.value = '';
  elements.reviewAuthorNameInput.value = '';
  elements.reviewAuthorCommentInput.value = '';
  elements.reviewRatingStarInput.value = '0';
};

export const authorPhoto = place =>
  place.profile_photo_url
    ? place.profile_photo_url
    : 'http://dummyimage.com/100x100/666/ffffff&text=No+Image';

export const renderReview = review => {
  const markup = `
        <li class="review">
            <div class="row">
               <div class="col-sm-3">
                 <div class="review__title">
                    <img src="${authorPhoto(
                      review
                    )}" class="img-rounded" alt="${
    review.author_name
  }">
                    <div class="review__name"><a href="#">${
                      review.author_name
                    }</a></div>
                 </div>
               </div>
               <div class="col-sm-9">
                 <div class="review__details">
                   <div class="review__rate star__rating">${restaurantRating(
                     review
                   )}</div>
                   <div class="review__description">${
                     review.text
                   }</div>
                 </div>
               </div>
            </div>
            <hr/>
        </li>
    `;

  elements.reviewsList.insertAdjacentHTML('beforeend', markup);
};

export const renderReviews = reviews => {
  reviews.forEach(renderReview);
};
