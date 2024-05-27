import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import searchReducer from '../reducer/searchReducer'; // Adjust the import path accordingly

const API = "https://raw.githubusercontent.com/GrowinFlow/json/main/data.json";
const initialState = {
  query: '',
  products: [],
  filterProducts: [],
  isLoading: false,
  error: null,
};

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log('Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      dispatch({ type: 'SET_LOADING' });
      try {
        const data = await fetchData(API);
        dispatch({ type: 'SET_DATA', payload: data });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error });
      }
    };
    loadData();
  }, []);

  const setQuery = (query) => {
    dispatch({ type: 'SET_QUERY', payload: query });
    dispatch({ type: 'FILTER_PRODUCTS' });
  };

  return (
    <SearchContext.Provider value={{ ...state, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
