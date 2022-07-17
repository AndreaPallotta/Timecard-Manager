const getAuthHeader = (contentType = 'application/json') => {
  const headers = {
    'Content-Type': contentType,
    Accept: 'application/json',
  };
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user?.authToken) {
      headers['x-access-token'] = user.authToken;
    }
  } catch {
    return headers;
  }
  return headers;
};

export default getAuthHeader;
