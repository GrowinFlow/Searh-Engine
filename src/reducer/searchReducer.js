const searchReducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return { ...state, isLoading: true, error: null };
      case 'SET_DATA':
        return {
          ...state,
          products: action.payload,
          filterProducts: action.payload,
          isLoading: false,
        };
      case 'SET_ERROR':
        return { ...state, isLoading: false, error: action.payload };
      case 'SET_QUERY':
        return { ...state, query: action.payload };
      case 'FILTER_PRODUCTS':
        return {
          ...state,
          filterProducts: state.products.filter(product =>
            product.title.toLowerCase().includes(state.query.toLowerCase()) || product.description.toLowerCase().includes(state.query.toLowerCase())
          ),
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  