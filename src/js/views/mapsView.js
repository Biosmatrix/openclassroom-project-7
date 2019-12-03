import { elements } from './base';

// eslint-disable-next-line import/prefer-default-export
export const map = mapOptions => new window.google.maps.Map(elements.map, mapOptions);
