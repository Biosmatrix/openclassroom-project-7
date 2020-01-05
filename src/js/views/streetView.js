import { elements } from './base';

import StreetView from '../models/StreetView';

// eslint-disable-next-line consistent-return,no-unused-vars,import/prefer-default-export
export const renderStreetViewPhoto = async restaurant => {
  if (restaurant) {
    try {
      const query = {
        location: restaurant.geometry.location
          .toString()
          .slice(1, -1),
        size: '400x400',
        fov: 80,
        heading: 70,
        pitch: 0
      };

      // new up StreetView model
      const streetView = new StreetView(query);

      // fetches nearby restaurants data
      const photo = await streetView.getPhoto();

      elements.streetViewPhoto.innerHTML = '';

      const html = `<img src="${photo}" alt="${restaurant.name}"/>`;

      elements.streetViewPhoto.insertAdjacentHTML('afterbegin', html);

      elements.streetViewPhoto.display = 'block';
    } catch (error) {
      alert(error);
    }
  }
};
