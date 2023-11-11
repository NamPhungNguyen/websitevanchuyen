const initialState = {
    username: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return { ...state, username: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;