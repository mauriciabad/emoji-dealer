import { useReducer, useEffect } from "react";

export default function useLocalStorageReducer(reducer, defaultVal, key) {
  let [state, dispatchState] = useReducer(reducer, defaultVal, () => {
    return JSON.parse(localStorage.getItem(key)) || defaultVal;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  
  return [state, dispatchState];
}
