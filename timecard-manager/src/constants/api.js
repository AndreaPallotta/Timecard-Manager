import getAuthHeader from '@/services/auth-header';
import { isDev, nullCheck } from './env';

export const API_URL = isDev
  ? 'http://localhost:8081'
  : 'http://localhost:8081';

export const AUTH_API = {
  login: `${API_URL}/auth/login`,
  signUp: `${API_URL}/auth/signUp`,
};

export const formatEndpoint = (endpoint) => {
  if (endpoint.includes('http://')) return endpoint;
  if (endpoint.startsWith('/')) return `${API_URL}${endpoint}`;
  return `${API_URL}/${endpoint}`;
};

export const handleErrors = (res, data) => {
  if (!res.ok || nullCheck(data)) {
    throw new Error(`${res.status}: ${data?.message || res.statusText}`);
  }
};

export const formatFetchReq = (method, body, contentType) => {
  const headers = getAuthHeader(contentType);
  if (method === 'GET') {
    return { headers };
  }
  try {
    const bodyString = JSON.stringify(body);
    return { headers, method, bodyString };
  } catch (err) {
    throw new Error('400: Request Body Invalid');
  }
};

class ApiHandler {
  static async get(endpoint, contentType) {
    const formattedEndpoint = formatEndpoint(endpoint);
    try {
      const req = formatFetchReq('GET', undefined, contentType);
      const res = await fetch(formattedEndpoint, req);
      const data = await res.json();
      handleErrors(res, data);
      return data;
    } catch (err) {
      return { ErrorMsg: err };
    }
  }

  static async post(endpoint, body, contentType) {
    const formattedEndpoint = formatEndpoint(endpoint);
    try {
      const req = formatFetchReq('GET', body, contentType);
      const res = await fetch(formattedEndpoint, req);
      const data = await res.json();
      handleErrors(res, data);
      return data;
    } catch (err) {
      return { ErrorMsg: err };
    }
  }
}

export default ApiHandler;
