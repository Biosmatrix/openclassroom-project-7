import axios from 'axios';
import { key, proxy } from '../config';

export default class StreetView {
  constructor(query) {
    this.query = query || null;
  }

  async getPhoto() {

    try {

      const res = await axios(`${proxy}https://maps.googleapis.com/maps/api/streetview?size=${this.query.size}&location=${this.query.location}&fov=${this.query.fov}&heading=${this.query.heading}&pitch=${this.query.pitch}&key=${key}`);

      return res.headers['x-final-url'];

    } catch (error) {

      alert(error);
    }
  }
}