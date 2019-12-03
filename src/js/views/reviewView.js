import { elements } from './base';
// eslint-disable-next-line import/no-cycle
import { restaurantRating } from './restaurantView';

export const getReviewInputs = () => ({
  author: elements.reviewAuthorNameInput.value,
  comment: elements.reviewAuthorCommentInput.value,
  rating: elements.reviewRatingStarInput.value,
});

export const clearReviewInputs = () => {
  elements.reviewAuthorNameInput.value = '';
  elements.reviewAuthorCommentInput.value = '';
  elements.reviewRatingStarInput.value = '0';
};

export const authorPhoto = place => (place.profile_photo_url ? place.profile_photo_url : 'http://dummyimage.com/60x60/666/ffffff&text=No+Image');

export const renderReview = (review) => {
  const markup = `
        <li class="review-block">
            <div class="row">
               <div class="col-sm-3 text-center">
                  <img src="${authorPhoto(review)}" class="img-rounded" alt="">
                  <div class="review-block-name"><a href="#">${review.author_name}</a></div>
               </div>
               <div class="col-sm-9">
                 <div class="review-block-rate star-rating">${restaurantRating(review)}</div>
                 <div class="review-block-description">${review.text}</div>
               </div>
            </div>
            <hr/>
        </li>
    `;

  elements.reviewsList.insertAdjacentHTML('beforeend', markup);
};

export const renderReviews = (reviews) => {
  reviews.forEach(renderReview);
};
