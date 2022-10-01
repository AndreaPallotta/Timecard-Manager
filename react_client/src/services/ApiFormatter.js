import { app, server } from '@/utils/env';

class ApiFormatter {
  static getHeaders(contentType = 'application/json') {
    const headers = {
      'Content-Type': contentType,
      Accept: 'application/json',
    };

    try {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user?.authToken && app.isJWT) {
        headers['Authorization'] = `Bearer ${user.authToken}`;
      }
    } catch {
      return headers;
    }
    return headers;
  }

  static formatEndpoint(endpoint) {
    if (endpoint.startsWith(app.prefix)) {
      return endpoint;
    }

    if (!endpoint.startsWith('/')) {
      endpoint = `/${endpoint}`;
    }

    return `${app.prefix}/${server.host}:${server.port}${endpoint}`;
  }
}

export default ApiFormatter;
