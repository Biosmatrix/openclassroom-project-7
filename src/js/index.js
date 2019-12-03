import '../styles/index.scss';
// eslint-disable-next-line no-unused-vars
import uniqid from 'uniqid';
import loadGoogleMaps from './modules/loadGoogleMaps';
// eslint-disable-next-line no-unused-vars
import { elements, elementStrings } from './views/base';
import { map } from './views/mapsView';
import * as markerView from './views/markerView';
// eslint-disable-next-line no-unused-vars
import { infoWindow, infoWindowContent, newInfoWindowContent } from './views/infoWindowView';
// eslint-disable-next-line max-len
// eslint-disable-next-line no-unused-vars,import/no-named-as-default,import/no-named-as-default-member
import Restaurants from './models/Restaurants';
// eslint-disable-next-line no-unused-vars
import Review from './models/Review';
// eslint-disable-next-line max-len
// eslint-disable-next-line no-unused-vars,import/no-named-as-default,import/no-named-as-default-member
import Filter from './models/Filter';
// eslint-disable-next-line no-unused-vars,import/no-duplicates
import * as restaurantView from './views/restaurantView';
// eslint-disable-next-line no-unused-vars
import * as reviewView from './views/reviewView';
// eslint-disable-next-line no-unused-vars
import { renderRestaurantRatingStars } from './views/RatingsView';

/**
 * Global state of the app
 */
const state = {};

loadGoogleMaps(() => {
  // Work to do after the library loads.
  state.googleMapsReady = true;
});

window.addEventListener('load', () => {
  // eslint-disable-next-line no-use-before-define
  initMap();
});

function initMap() {
  // Initialize variables
  state.bounds = new window.google.maps.LatLngBounds();
  state.infoWindow = new window.google.maps.InfoWindow();
  state.currentInfoWindow = state.infoWindow;
  state.demoRestaurants = [
    {
      geometry: {
        location: {
          lat: 51.51391746153278,
          lng: -0.13034511376952196,
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      id: 'e7ee3a15b6bd810b61bf34dad15bbc5730201ddd',
      name: 'Bateaux London',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3480,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/101570148793827494788/photos">A Google User</a>',
          ],
          photo_reference: 'CmRaAAAAYG7ci6eFkJq765ie_fVjCQjNja2u2U9kmeEZ9ALDYe3-UiVV8m28ue_qDSt7KOV_BK-YzbvkrJbphtXMpPqNsOUW-l80J8Xo1AIu6blkrf-0cb8p6XardCc6fshJszOQEhA_aafnj1Z2undtu6A5YlWsGhS2XW9FF6aUlpSifMrTbDW5UmHpJg',
          width: 5220,
        },
      ],
      place_id: 'ChIJ_XD7HMkEdkgRr8HNeQV9Yug',
      plus_code: {
        compound_code: 'GV5M+W4 London',
        global_code: '9C3XGV5M+W4',
      },
      price_level: 3,
      rating: 4,
      reviews: [],
      reference: 'ChIJ_XD7HMkEdkgRr8HNeQV9Yug',
      scope: 'GOOGLE',
      types: [
        'restaurant',
        'travel_agency',
        'food',
        'point_of_interest',
        'establishment',
      ],
      user_ratings_total: 289,
      vicinity: 'Embankment Pier, Victoria Embankment, London',
    },
    {
      geometry: {
        location: {
          lat: 51.51469196580559,
          lng: -0.12369323541258836,
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      id: '71ad58a331f13cf6f484f9eb071bcfea090a80ce',
      name: 'R.S. Hispaniola',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 788,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/116372553013198050624/photos">Paul Phillips</a>',
          ],
          photo_reference: 'CmRaAAAABAnYjprfHNrUx6e3mJNPY5sAs3Hkmw_p0mbfQQl4grii6RLYs_VneXPfhNgI5QnCah1bCoCOeus5syGr1ZMDe9G7js2pdYu_ZxV10ZUMQrtL8lTj79HI_FFuCel7WTYbEhA4yej4uUdoyi3e3CK95cGGGhQGtWC2aXYtczDjAueFzBVnyHRymA',
          width: 1181,
        },
      ],
      place_id: 'ChIJ2Qfl5bUEdkgRyZhpfAoiZ0w',
      plus_code: {
        compound_code: 'GV4H+G6 London',
        global_code: '9C3XGV4H+G6',
      },
      price_level: 2,
      rating: 4.1,
      reviews: [],
      reference: 'ChIJ2Qfl5bUEdkgRyZhpfAoiZ0w',
      scope: 'GOOGLE',
      types: [
        'bar',
        'restaurant',
        'food',
        'point_of_interest',
        'establishment',
      ],
      user_ratings_total: 842,
      vicinity: 'Victoria Embankment, London',
    },
    {
      geometry: {
        location: {
          lat: 51.51367709546019,
          lng: -0.1378552990112211,
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      id: 'c012fe61ec73be6d98e2a576641024f7f1f8d572',
      name: 'Caffe Concerto Piccadilly',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3755,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/100544395614275688131/photos">Caffe Concerto</a>',
          ],
          photo_reference: 'CmRaAAAAU_t7wmXkRXx9mZ8JpLLRNR99foy3WyeQMeuTm9xXc43IhXf1QYFSK0V7ClfLt9zOosxOvo47JvJ8rorVR_a1jmi9EcFoufB4T_iUFckVM3kNJ4Oc1ZF18-IxmTaErW_OEhByU_MOZXwWFtJf-Q9kuebuGhSOVahXXrw3ywV8mHeQZXCB5OVFiw',
          width: 4026,
        },
      ],
      place_id: 'ChIJl1l3INQEdkgR9NcwIm5QKmQ',
      plus_code: {
        compound_code: 'GV57+M7 London',
        global_code: '9C3XGV57+M7',
      },
      price_level: 2,
      rating: 3.5,
      reviews: [],
      reference: 'ChIJl1l3INQEdkgR9NcwIm5QKmQ',
      scope: 'GOOGLE',
      types: [
        'bakery',
        'cafe',
        'restaurant',
        'food',
        'point_of_interest',
        'store',
        'establishment',
      ],
      user_ratings_total: 880,
      vicinity: '29-31 Piccadilly, London',
    },
    {
      geometry: {
        location: {
          lat: 51.50721344327105,
          lng: -0.13708282281493211,
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      id: 'da51233b8235420861e4a5cf60a98851f13228a7',
      name: 'Rock and Sole Plaice',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 315,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/100790921425696971528/photos">Rock &amp; Sole Plaice</a>',
          ],
          photo_reference: 'CmRaAAAAZFYVoqYQ9e-zsOZYA62fPhIJpBymwna7jtn4A4m34CUIVSGnoumKU-eyKN2zguibKsXe0RuLdwJCk8Kcx5YXBIJJ2h62_9hp1agh08kHJ6RhFBSmaQhksJYNBGo1BFEBEhBalcwhiQtrCfuuuCP3R-gaGhTshI3-sa-kbrMo8-uZin9vzg3IsQ',
          width: 851,
        },
      ],
      place_id: 'ChIJ6wsgLTMbdkgRObEIyzQf10g',
      plus_code: {
        compound_code: 'GV7F+WW London',
        global_code: '9C3XGV7F+WW',
      },
      price_level: 2,
      rating: 4.1,
      reviews: [],
      reference: 'ChIJ6wsgLTMbdkgRObEIyzQf10g',
      scope: 'GOOGLE',
      types: [
        'restaurant',
        'food',
        'point_of_interest',
        'establishment',
      ],
      user_ratings_total: 1891,
      vicinity: '47 Endell St, London',
    },
    {
      geometry: {
        location: {
          lat: 51.51063234875851,
          lng: -0.13721156884764696,
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
      id: '3f0f5a0272c8e09d051cdb1ccc47a67c908b9d3b',
      name: 'The Yacht London',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 3024,
          html_attributions: [
            '<a href="https://maps.google.com/maps/contrib/109789839888044860407/photos">The Yacht London</a>',
          ],
          photo_reference: 'CmRaAAAA5_Io5RaEcVuHMtjQhBK9RHT4NGjaRoLDf6tzqMVBNjBI1hKRmEMOyRoubE4EMGVL-HfnPbNqeBCb_zzVz_VzNJxGHJix5F7VopehE5y1zsFJDCTFZ1gRISF2OFtq2D_4EhA4fPJ91Pw_xuO45a8NruXBGhRV2dg3EvITz8biCls3KdNouVuYcg',
          width: 4032,
        },
      ],
      place_id: 'ChIJFRTnDbQEdkgRuu8B5B7tfdU',
      plus_code: {
        compound_code: 'GV6P+65 London',
        global_code: '9C3XGV6P+65',
      },
      rating: 4.2,
      reviews: [],
      reference: 'ChIJFRTnDbQEdkgRuu8B5B7tfdU',
      scope: 'GOOGLE',
      types: [
        'bar',
        'restaurant',
        'food',
        'point_of_interest',
        'establishment',
      ],
      user_ratings_total: 257,
      vicinity: 'Temple Pier, Victoria Embankment, London',
    },
  ];

  // Try HTML5 geolocation
  if (navigator.geolocation) {
    // eslint-disable-next-line no-use-before-define
    navigator.geolocation.getCurrentPosition(showRestaurants, handleError);
  } else {
    // Browser doesn't support geolocation
    // eslint-disable-next-line no-use-before-define
    handleLocationError(false, state.infoWindow);
  }
}

const showRestaurants = (position) => {
  state.currentPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };

  // map options
  const mapOptions = {
    zoom: 15,
    center: state.currentPosition,
    mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    streetViewControl: false,
  };

  // set map
  // eslint-disable-next-line no-undef
  state.map = map(mapOptions);

  // adds marker of the user current position
  state.bounds.extend(state.currentPosition);

  // set infoWindow to the user current position
  state.infoWindow.setPosition(state.currentPosition);

  // set map center of the user current position
  state.map.setCenter(state.currentPosition);

  // adds marker of the user current position
  state.userMarker = markerView.marker(state.currentPosition, state.map);

  // Call Places Nearby Search on user's location
  // eslint-disable-next-line no-use-before-define
  getNearbyRestaurants(state.currentPosition);

  // drag the map and find new restaurants on the map
  state.map.addListener('dragend', () => {
    // eslint-disable-next-line no-use-before-define
    findRestaurants();
  });
};

const handleError = (error) => {
  // Browser supports geolocation, but user has denied permission
  if (error.code === 0) {
    // eslint-disable-next-line no-alert
    alert('An unknown error occurred.');
  } else if (error.code === 1) {
    // eslint-disable-next-line no-alert
    alert('User denied the request for Geolocation. Refresh the browser and allow Geolocation');
  } else if (error.code === 2) {
    // eslint-disable-next-line no-alert
    alert('Location information is unavailable.');
  } else if (error.code === 3) {
    // eslint-disable-next-line no-alert
    alert('The request to get user location timed out.');
  }
  // eslint-disable-next-line no-use-before-define
  handleLocationError(true, state.infoWindow);
};

// Handle a geolocation error
// eslint-disable-next-line no-shadow
const handleLocationError = (browserHasGeolocation, infoWindow) => {
  // Set default location to Sydney, Australia
  state.currentPosition = { lat: -33.856, lng: 151.215 };

  // map options
  const mapOptions = {
    zoom: 15,
    center: state.currentPosition,
    mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    streetViewControl: false,
  };

  // set map
  state.map = map(mapOptions);

  // Display an InfoWindow at the map center
  infoWindow.setPosition(state.currentPosition);

  infoWindow.setContent(browserHasGeolocation
    ? 'Geolocation permissions denied. Using default location.'
    : 'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(state.map);

  state.currentInfoWindow = infoWindow;
  // Call Places Nearby Search on the default location
  // eslint-disable-next-line no-use-before-define
  getNearbyRestaurants(state.currentPosition);
};

// Perform a Places Nearby Search Request
const getNearbyRestaurants = (position) => {
  const request = {
    location: position,
    rankBy: window.google.maps.places.RankBy.DISTANCE,
    keyword: 'restaurant',
  };

  state.service = new window.google.maps.places.PlacesService(state.map);
  // eslint-disable-next-line no-use-before-define
  state.service.nearbySearch(request, getNearbyRestaurantsCallback);
};

// eslint-disable-next-line no-unused-vars
const findRestaurants = () => {
  const request = {
    bounds: state.map.getBounds(),
    types: ['restaurant'],
  };

  // google places API
  state.places = new window.google.maps.places.PlacesService(state.map);

  // eslint-disable-next-line no-use-before-define
  state.places.nearbySearch(request, findRestaurantsCallback);
};

// Handle the results (up to 20) of the Nearby Search
const getNearbyRestaurantsCallback = (results, status) => {
  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    // Prepare UI for results
    restaurantView.clearResults();
    // set the markers array to an empty array
    if (state.markers) state.markers = markerView.clearMarkers(state.markers);
    // eslint-disable-next-line max-len
    if (state.demoRestaurantsMarkers) state.demoRestaurantsMarkers = markerView.clearMarkers(state.demoRestaurantsMarkers);

    // eslint-disable-next-line no-use-before-define
    // Set markers and render markers on the Map
    state.markers = markerView.setMarkers(state.map, results);
    state.demoRestaurantsMarkers = markerView.setMarkers(state.map, state.demoRestaurants);

    // store the result
    state.results = [...results, ...state.demoRestaurants];

    // Render results on UI
    restaurantView.renderResults(state.results);

    // eslint-disable-next-line no-use-before-define
    mapEventListeners();

    renderRestaurantRatingStars(elements.reviewRatingStar);
  }
};

const findRestaurantsCallback = (results, status) => {
  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    // Prepare UI for results
    restaurantView.clearResults();
    // set the markers array to an empty array
    if (state.markers) state.markers = markerView.clearMarkers(state.markers);
    // eslint-disable-next-line max-len
    if (state.demoRestaurantsMarkers) markerView.clearMarkers(state.demoRestaurantsMarkers);

    // eslint-disable-next-line no-use-before-define
    // Set markers and render markers on the Map
    state.markers = markerView.setMarkers(state.map, state.results);

    // store the result
    state.results = results;

    // Render results on UI
    restaurantView.renderResults(state.results);

    // eslint-disable-next-line no-use-before-define
    mapEventListeners();

    renderRestaurantRatingStars(elements.reviewRatingStar);
  }
};

// Map Event listeners controller
const mapEventListeners = () => {
  state.newMarkers = [];
  state.newRestaurants = [];
  // New restaurants search object and add to state
  state.restaurants = new Restaurants();
  // eslint-disable-next-line no-shadow
  state.markers.forEach((marker) => {
    // Add click listener to each marker
    // Open the infoWindowView when the user clicks on a marker
    window.google.maps.event.addListener(marker, 'click', () => {
      const request = {
        placeId: marker.placeId,
        fields: ['name', 'vicinity', 'formatted_address', 'formatted_phone_number', 'geometry', 'rating',
          'website', 'photos', 'reviews'],
      };
      // Only fetch the details of a place when the user clicks on a marker.
      state.service.getDetails(request, (result, status) => {
        // eslint-disable-next-line no-use-before-define
        showRestaurantDetails(result, marker, status);
      });
    });

    // Close the infoWindowView when the user clicks on the map
    window.google.maps.event.addListener(state.map, 'click', () => {
      state.infoWindow.close(state.map, marker);
    });

    // Adjust the map bounds to include the location of this marker
    state.bounds.extend(marker.geometry.location);
  });

  // Demo restaurant markers
  // eslint-disable-next-line no-shadow
  state.demoRestaurantsMarkers.forEach((marker) => {
    // Open the infoWindowView when the user clicks on a marker
    window.google.maps.event.addListener(marker, 'click', () => {
      // eslint-disable-next-line no-shadow
      const getRestaurantData = (data, id) => data.filter(marker => marker.id === id);
      // const result = state.restaurants.getRestaurant(marker.id);
      // eslint-disable-next-line no-use-before-define
      // get marker details
      const result = getRestaurantData(state.demoRestaurants, marker.id);

      // set marker infoWindow
      state.infoWindow.open(state.map, marker);

      // sets restaurants details
      state.infoWindow.setContent(infoWindowContent(result[0]));

      // eslint-disable-next-line no-undef
      restaurantView.renderRestaurantInfo(result[0]);
    });

    // Close the infoWindowView when the user clicks on the map
    window.google.maps.event.addListener(state.map, 'click', () => {
      state.infoWindow.close(state.map, marker);
    });

    // Adjust the map bounds to include the location of this marker
    state.bounds.extend(marker.geometry.location);
  });

  window.google.maps.event.addListener(state.map, 'rightclick', (event) => {
    const latlng = new window.google.maps.LatLng(event.latLng.lat(), event.latLng.lng());

    // eslint-disable-next-line no-console
    // console.log(`Lat:${event.latLng.lat()} -- Lng:${event.latLng.lng()}`);

    const restaurantId = uniqid('new');
    const restaurant = {
      geometry: { location: latlng },
      id: restaurantId,
      place_id: restaurantId,
      isRestaurantNew: true,
    };

    // sets a maker
    state.newMarkers.push(markerView.setMarker(state.map, restaurant));

    // New restaurant markers
    // eslint-disable-next-line no-shadow
    state.newMarkers.forEach((marker) => {
      // Open the infoWindowView when the user clicks on a marker
      window.google.maps.event.addListener(marker, 'click', () => {
        // eslint-disable-next-line no-console,no-param-reassign
        if (marker.isRestaurantNew) {
          state.infoWindow.open(state.map, marker);

          state.infoWindow.setContent(newInfoWindowContent(marker));

          const restaurantRatingStar = document.querySelectorAll(`#${elementStrings.restaurantRatingStar}`);

          if (restaurantRatingStar) {
            renderRestaurantRatingStars(restaurantRatingStar);
          }

          const restaurantForm = document.querySelector(`#${elementStrings.restaurantForm}`);

          if (restaurantForm) {
            // eslint-disable-next-line no-shadow
            restaurantForm.addEventListener('submit', (event) => {
              event.preventDefault();

              const id = document.querySelector(`#${elementStrings.newRestaurantId}`).value;
              const name = document.querySelector(`#${elementStrings.newRestaurantName}`).value;
              const address = document.querySelector(`#${elementStrings.newRestaurantAddress}`).value;
              const rating = document.querySelector(`#${elementStrings.newRestaurantRating}`).value;
              const locationLat = document.querySelector(`#${elementStrings.newRestaurantLat}`).value;
              const locationLng = document.querySelector(`#${elementStrings.newRestaurantLng}`).value;

              const position = new window.google.maps.LatLng(locationLat, locationLng);

              const place = {
                id,
                place_id: id,
                name,
                vicinity: address,
                rating: parseInt(rating, 10),
                position,
                geometry: { location: position },
                reviews: [],
                photos: '',
              };

              state.newRestaurants.push(state.restaurants.addRestaurant(place));

              // restaurantView.renderNewRestaurant(place);

              state.results.unshift(place);

              // Render results on UI
              restaurantView.clearResults();
              restaurantView.renderNewResults(state.results);

              // eslint-disable-next-line no-param-reassign
              marker.isRestaurantNew = false;

              state.infoWindow.close(state.map, marker);
            });
          }
        } else {
          // get marker details
          const result = state.restaurants.getRestaurant(marker.id);

          // set marker infoWindow
          state.infoWindow.open(state.map, marker);

          // sets restaurants details
          state.infoWindow.setContent(infoWindowContent(result[0]));

          // eslint-disable-next-line no-undef
          restaurantView.renderRestaurantInfo(result[0]);
        }
      });

      // Close the infoWindowView when the user clicks on the map
      window.google.maps.event.addListener(state.map, 'click', () => {
        state.infoWindow.close(state.map, marker);
      });

      // Adjust the map bounds to include the location of this marker
      state.bounds.extend(marker.geometry.location);
    });
  });

  /* Once all the markers have been placed, adjust the bounds of the map to
   * show all the markers within the visible area. */
  state.map.fitBounds(state.bounds);
};

// Builds an InfoWindow to display details above the marker
// eslint-disable-next-line no-shadow
const showRestaurantDetails = (result, marker, status) => {
  if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    // opens infoWindowView on the map
    state.infoWindow.open(state.map, marker);

    // sets restaurants details
    state.infoWindow.setContent(infoWindowContent(result));

    restaurantView.renderRestaurantInfo(result);
  } else {
    // eslint-disable-next-line no-console
    console.log(`showRestaurantDetails failed: ${status}`);
  }
};

// pagination Controller
elements.searchResultPages.addEventListener('click', (event) => {
  const btn = event.target.closest('.btn-inline');

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);

    restaurantView.clearResults();

    if (state.filteredRestaurants) {
      restaurantView.renderResults(state.filteredRestaurants, goToPage, 4);

      return;
    }
    restaurantView.renderResults(state.results, goToPage, 4);
  }
});


// custom-options

// eslint-disable-next-line no-restricted-syntax
for (const dropdown of document.querySelectorAll('.custom--select__wrapper')) {
  // eslint-disable-next-line func-names
  dropdown.addEventListener('click', function () {
    this.querySelector('.custom--select').classList.toggle('open');
  });
}

// eslint-disable-next-line no-restricted-syntax
for (const option of document.querySelectorAll('.custom--option')) {
  // eslint-disable-next-line func-names
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom--option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.custom--select').querySelector('.custom--select__trigger span').innerHTML = `${this.textContent} <span class="fa fa-star"></span>`;
    }
  });
}

window.addEventListener('click', (event) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const select of document.querySelectorAll('.custom--select')) {
    if (!select.contains(event.target)) {
      select.classList.remove('open');
    }
  }
});


/**
 * Filter Restaurants
 */
// eslint-disable-next-line no-unused-vars
const filterRestaurants = (rating) => {
  if (rating) {
    state.allRestaurant = [...state.results];
    // state.allRestaurant = [...state.results, ...state.newRestaurants];

    state.AllMarkers = [...state.markers, ...state.newMarkers, ...state.demoRestaurantsMarkers];

    // 2) New filter object and add to state
    state.filter = new Filter(state.allRestaurant, rating);

    // 3) Prepare UI for results
    restaurantView.clearResults();

    try {
      // 4) Search for recipes
      state.filter.getResults();

      // update state
      state.filteredRestaurants = state.filter.result;

      // clear markers
      state.markers = markerView.clearMarkers(state.AllMarkers);

      // 5) Render results on UI
      state.markers = markerView.setMarkers(state.map, state.filteredRestaurants);

      restaurantView.renderResults(state.filteredRestaurants);
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Something wrong with filtering restaurants...');
    }
  }
};

elements.filterInput.addEventListener('click', (event) => {
  const btn = event.target.closest('.custom--option');

  if (btn) {
    const filterRating = btn.dataset.value;

    if (filterRating) {
      filterRestaurants(filterRating);
    }
  }
});


/**
 * REVIEW CONTROLLER
 */
const controlReview = () => {
  // 1) Get query from view
  const inputs = reviewView.getReviewInputs();

  if (inputs) {
    // 2) New search object and add to state
    state.review = new Review();

    // 3) Prepare UI for results
    reviewView.clearReviewInputs();

    try {
      // 4) Search for recipes
      const review = state.review.addReview(inputs.author, inputs.rating, inputs.comment);

      // 5) Render results on UI
      reviewView.renderReview(review);
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Something wrong with review controller...');
    }
  }
};

elements.reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();

  controlReview();
});
