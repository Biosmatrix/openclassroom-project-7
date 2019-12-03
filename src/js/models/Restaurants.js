import Place from "./Places";

export default class Restaurants {

    constructor() {
        this.restaurants = [];
        this.newRestaurants = [];
    }

    async findRestaurants(){

        let query = {
            location: `${this.currentPosition.lat},${this.currentPosition.lng}`,
            radius: 1000,
            type: "restaurant"
        };

        try {

            //new up place model
            this.places =  new Place(query);

            //fetches nearby restaurants data
            this.result = await this.places.nearbySearch();


        } catch (error) {

            alert(error);

        }

    }

    async  getRestaurantDetails(id) {

        if (!id) return;

        //query parameters
        let query = {
            id: id,
            fields:"name,rating,vicinity,formatted_address,formatted_phone_number,geometry,reviews,photos"
        };

        //new up places model
        let places = new Place(query);

        // fetches restaurant details
        return await places.getDetails();

    }

  async restaurantData () {
    try {
      const response = await fetch("./data.json");

      return await response.json();

    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

    getRestaurant(id) {

        return this.newRestaurants.filter(marker => marker.id === id);

    }

    addRestaurant(place) {

        const restaurant = {
            id: place.id,
            place_id:place.place_id,
            name:place.name,
            vicinity:place.vicinity,
            rating:place.rating,
            position:place.position,
            geometry:place.geometry,
            icon:place.icon,
            reviews:place.reviews,
            photos:place.photos
        };

        this.newRestaurants.push(restaurant);

        return restaurant;
    }

    deleteRestaurant(id) {

        const index = this.restaurants.findIndex(el => el.id === id);

        this.restaurants.splice(index, 1);

        // Persist data in localStorage
        this. storeRestaurant();
    }

    geTotalRestaurants() {
        return this.restaurants.length;
    }

    storeRestaurant() {
        localStorage.setItem('restaurants', JSON.stringify(this.restaurants));
    }

    getRestaurants() {

        const storage = JSON.parse(localStorage.getItem('restaurants'));

        // Restoring restaurants from the localStorage
        if (storage) this.restaurants = storage;
    }

}

