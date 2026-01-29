import { useEffect } from "react";

export const useLocalStorage = (key: string, value: unknown): void => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
};
