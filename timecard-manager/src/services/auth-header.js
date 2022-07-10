import { isDev } from '@/constants/env';

const getAuthHeader = (contentType = 'application/json') => {
  const headers = {
    'Content-Type': contentType,
    Accept: 'application/json',
  };
  if (isDev) return headers;
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user?.accessToken) {
      headers['x-access-token'] = `Bearer ${user.accessToken}`;
    }
  } catch {
    return headers;
  }
  return headers;
};

export default getAuthHeader;
