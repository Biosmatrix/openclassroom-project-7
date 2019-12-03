import { elements } from './base';
import { createPhoto, restaurantRating } from './restaurantView';

// export const infoWindowView = new google.maps.InfoWindow();

export const infoWindow = currentPosition => new window.google.maps.InfoWindow({ content: `${elements.infoWindow}`, position: currentPosition });

export const clearInfoWindow = () => {
  elements.infoIcon.innerHTML = '';
  elements.infoUrl.innerHTML = '';
  elements.infoRating.innerHTML = '';
};

export const isPhoneNumber = restaurant => (!restaurant.formatted_phone_number ? '' : restaurant.formatted_phone_number);

export const isRating = restaurant => (!restaurant.rating ? '' : restaurantRating(restaurant));

export const infoWindowContent = restaurant => `
        <div class="container text-center">
            <div id="infoPhoto">
               <img class="restaurant-photo" src="${createPhoto(restaurant)}" alt="${restaurant.name}" width="100px" height="70px"/>
            </div>
            <h3 class="star-rating" id="infoRating">${isRating(restaurant)}</h3>
            <div id="infoName">
               <p class="restaurant-name"> ${restaurant.name}</p>
            </div>
            <div class="restaurant-address" id="infoAddress">${restaurant.vicinity}</div>
            <div class="restaurant-phone" id="infoPhone">${isPhoneNumber(restaurant)}</div>
            <a href="#" data-toggle="modal" data-target="#restaurantInfoModal">View More</a>
        </div>
    `;

export const newInfoWindowContent = marker => `<form id="restaurantForm">
          <div class="form-group">
            <label for="restaurantName">Restaurant Name</label>
            <input type="text" class="form-control" name="restaurantName" id="restaurantName" aria-describedby="restaurantName" placeholder="Restaurant Name">
          </div>
          <div class="form-group">
            <label for="restaurantAddress">Restaurant Address</label>
            <input type="text" class="form-control" name="restaurantAddress" id="restaurantAddress" aria-describedby="restaurantAddress" placeholder="Restaurant Address">
          </div>
            <div class="star-rating text-center" id="restaurant_rating">
               <span class="fa fa-star-o" data-rating="1"></span>
               <span class="fa fa-star-o" data-rating="2"></span>
               <span class="fa fa-star-o" data-rating="3"></span>
               <span class="fa fa-star-o" data-rating="4"></span>
               <span class="fa fa-star-o" data-rating="5"></span>
               <input type="hidden" name="rating" id="restaurantRating" class="rating-value" value="0"/>
            </div>
          <input type="hidden" id="markerId" name="markerId" value="${marker.id}"/>
          <input type="hidden" id="restaurantLocationLat" name="restaurantLocationLat" value="${marker.position.lat()}"/>
          <input type="hidden" id="restaurantLocationLng" name="restaurantLocationLng" value="${marker.position.lng()}"/>
          <button type="submit" id="btnAddRestaurant" class="btn btn-primary btn-block">Add Restaurant</button>
        </form>`;
