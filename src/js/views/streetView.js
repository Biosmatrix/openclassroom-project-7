import { elements } from './base';
// eslint-disable-next-line import/no-cycle,import/named
import { restaurantRating } from './restaurantView';
import StreetView from '../models/StreetView';

// eslint-disable-next-line consistent-return,no-unused-vars
export const renderStreetViewPhoto = async (restaurant) => {
  if (restaurant) {
    try {
      let query = {
        location: restaurant.geometry.location.toString().slice(1, -1),
        size: '400x400',
        fov: 80,
        heading: 70,
        pitch: 0,
      };

      //new up StreetView model
      let streetView =  new StreetView(query);

      //fetches nearby restaurants data
      let photo = await streetView.getPhoto();

      elements.streetViewPhoto.innerHTML = '';

      const html = `<img src="${photo}" alt="${restaurant.name}"/>`;

      elements.streetViewPhoto.insertAdjacentHTML('afterbegin', html);

      elements.streetViewPhoto.display = 'block';

    } catch (error) {

      alert(error);

    }
  }

};
