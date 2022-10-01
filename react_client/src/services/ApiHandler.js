import ApiFormatter from '@/services/apiFormatter';
import axios from 'axios';

class ApiHandler {
  static async get(endpoint, params, contentType) {
    const formattedEndpoint = ApiFormatter.formatEndpoint(endpoint);
    const headers = ApiFormatter.getHeaders(contentType);

    try {
      const { data } = await axios.post(
        formattedEndpoint,
        { params },
        { headers }
      );
      if (!data) {
        throw new Error('Response body is empty');
      }
      return data;
    } catch (err) {
      throw new Error(`${err.response.data.error || err.message}`);
    }
  }

  static async post(endpoint, params, contentType) {
    const formattedEndpoint = ApiFormatter.formatEndpoint(endpoint);
    const headers = ApiFormatter.getHeaders(contentType);

    try {
      const { data } = await axios.post(formattedEndpoint, params, { headers });
      if (!data) {
        throw new Error('Response body is empty');
      }
      return data;
    } catch (err) {
      throw new Error(`${err.response.data.error || err.message}`);
    }
  }
}

export const api = { get: ApiHandler.get, post: ApiHandler.post };
