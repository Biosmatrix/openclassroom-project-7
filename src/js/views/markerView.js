import markerIcon from '../../img/restauant.png';

// eslint-disable-next-line max-len
export const marker = (currentPosition, map) => new window.google.maps.Marker({ position: currentPosition, map });

// drop marker on the map
export const dropMarker = (map, markers, index) => markers[index].setMap(map);

// reset markers and results
export const clearMarkers = (markers) => {
  // eslint-disable-next-line no-shadow
  markers.forEach((marker, index) => {
    if (markers[index]) {
      markers[index].setMap(null);
    }
  });

  // set markers array to an empty array
  return [];
};

export const setMarkers = (map, restaurants) => {
  const markers = [];

  restaurants.forEach((restaurant) => {
    // creates a marker on the map
    markers.push(new window.google.maps.Marker({
      map,
      position: restaurant.geometry.location,
      geometry: restaurant.geometry,
      placeId: restaurant.place_id,
      id: restaurant.id,
      icon: {
        url: `${markerIcon}`,
        scaledSize: new window.google.maps.Size(50, 50), // pixels
      },
      animation: window.google.maps.Animation.DROP,
    }));
  });

  return markers;
};

export const setMarker = (map, restaurant) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new window.google.maps.Marker({
    map,
    position: restaurant.geometry.location,
    geometry: restaurant.geometry,
    placeId: restaurant.place_id,
    id: restaurant.id,
    isRestaurantNew: restaurant.isRestaurantNew,
    icon: {
      url: `${markerIcon}`,
      scaledSize: new window.google.maps.Size(50, 50), // pixels
    },
  });
