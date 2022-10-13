import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue !== null) return JSON.parse(storageValue);

    if (typeof defaultValue === 'function') {
      return initial();
    } else {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
