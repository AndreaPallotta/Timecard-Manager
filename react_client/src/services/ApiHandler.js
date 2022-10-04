import ApiFormatter from '@/services/apiFormatter';
import axios from 'axios';

class ApiHandler {
  static async get(endpoint, params, toggle = () => {}, contentType) {
    toggle();
    const formattedEndpoint = ApiFormatter.formatEndpoint(endpoint);
    const headers = ApiFormatter.getHeaders(contentType);

    try {
      const { data } = await axios.post(
        formattedEndpoint,
        { params },
        { headers }
      );
      if (!data) {
        throw new Error('Response is empty');
      }
      toggle();
      return data;
    } catch (err) {
      toggle();
      throw new Error(`${err.response.data.error || err.message}`);
    }
  }

  static async post(endpoint, params, toggle = () => {}, contentType) {
    toggle();
    const formattedEndpoint = ApiFormatter.formatEndpoint(endpoint);
    const headers = ApiFormatter.getHeaders(contentType);

    try {
      const { data } = await axios.post(formattedEndpoint, params, { headers });
      if (!data) {
        throw new Error('Response is empty');
      }
      toggle();
      return data;
    } catch (err) {
      toggle();
      throw new Error(`${err.response.data.error || err.message}`);
    }
  }
}

export const api = { get: ApiHandler.get, post: ApiHandler.post };
