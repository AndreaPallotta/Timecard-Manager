import getAuthHeader from '@/services/auth-header';
import { isDev, nullSafe } from './env';

export const API_URL = isDev
  ? 'http://localhost:8081'
  : 'http://localhost:8081';

export const formatEndpoint = (endpoint) => {
  if (endpoint.includes('http://')) return endpoint;
  if (endpoint.startsWith('/')) return `${API_URL}${endpoint}`;
  return `${API_URL}/${endpoint}`;
};

export const handleErrors = (res, data) => {
  if (!res.ok || !nullSafe(data)) {
    throw new Error(`(${res.status}) ${data?.Error || res.statusText}`);
  }
};

export const formatFetchReq = (method, params, contentType) => {
  const headers = getAuthHeader(contentType);
  if (method === 'GET') {
    if (!params || typeof params !== 'object') {
      return { headers };
    }
    return new URLSearchParams(params).toString();
  }
  try {
    const body = JSON.stringify(params);
    return { headers, method, body };
  } catch (err) {
    throw new Error('400: Request Body Invalid');
  }
};

class ApiHandler {
  static async request(endpoint, params, contentType, reqType = 'GET') {
    const formattedEndpoint = formatEndpoint(endpoint);
    try {
      const req = formatFetchReq(reqType, params, contentType);
      const res = await fetch(formattedEndpoint, req);
      const data = await res.json();
      handleErrors(res, data);
      return data;
    } catch (err) {
      return { ErrorMsg: err };
    }
  }
  static async get(endpoint, params, contentType) {
    return ApiHandler.request(endpoint, params, contentType);
  }

  static async post(endpoint, params, contentType) {
    return ApiHandler.request(endpoint, params, contentType, 'POST');
  }
}

export default ApiHandler;
