import  { useState, useEffect } from "react";

export const useDebounce = (value, delay, setIsLoading) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => { 
     //setIsLoading(() => true) 
    const index = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(index);
    };
  }, [value]);

  return debouncedValue;
};