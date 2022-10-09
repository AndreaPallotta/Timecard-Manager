export const getStorageValue = (key) => {
  const value = localStorage.getItem(key);
  console.log('value', value);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

export const getStorageValues = (...keys) =>
  keys.reduce((acc, key) => {
    const value = getStorageValue(key);
    console.log('value 2', value);
    return { ...acc, [key]: value };
  }, {});

export const checkUserLoggedIn = () => {
  const { auth } = getStorageValues('auth');
  if (!auth) return false;
  return auth.authToken !== undefined && auth.refreshToken !== undefined;
};
