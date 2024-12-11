import { useEffect, useState } from "react";

export default function useStickyState(defaultValue, name) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined" || !window.localStorage) {
      return defaultValue;
    }
    const persistedValue = window.localStorage.getItem(name);
    if (persistedValue === null) {
      return defaultValue;
    }

    // Try to parse the stored value as a date
    try {
      return new Date(parseInt(persistedValue, 10));
    } catch (error) {
      // If parsing fails, return default value
      console.error("Error parsing stored date:", error);
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(name, value.getTime());
  }, [name, value]);

  return [value, setValue];
}
