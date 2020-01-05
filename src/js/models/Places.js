import axios from 'axios';
import { key, proxy, signature } from '../config';

export default class Place {
    constructor(query) {
        this.query = query || null;
    }

    async getDetails() {

        try {

            const res = await axios(`${proxy}https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.query.id}&fields=${this.query.fields}&key=${key}`);

            return res.data.result;

        } catch (error) {

            alert(error);
        }
    }

    async nearbySearch() {

        try {

            const res = await axios(`${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.query.location}&radius=${this.query.radius}&type=${this.query.type}&key=${key}`);

            return res.data.results;

        } catch (error) {

            alert(error);
        }
    }

    async getPhoto() {

        try {

            const res = await axios(`${proxy}https://maps.googleapis.com/maps/api/place/photo?maxwidth=${this.query.maxwidth}&photoreference=${this.query.photoreference}&key=${key}`);

            return res.headers['x-final-url'];

        } catch (error) {

            alert(error);
        }
    }
}