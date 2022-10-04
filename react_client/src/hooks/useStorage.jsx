import { useEffect, useState } from 'react';

const useStorage = (key, def) => {
  const [storage, setStorage] = useState(getStorage);

  const getStorage = () => {
    const item = localStorage.getItem(key);
    if (item === null) return def;

    try {
      return JSON.parse(item);
    } catch {
      return def;
    }
  };

  const clear = () => {
    localStorage.setItem(key, null);
  };

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storage));
      // eslint-disable-next-line no-empty
    } catch {}
  }, []);

  return [storage, setStorage, clear];
};

export default useStorage;
