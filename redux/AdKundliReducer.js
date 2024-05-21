// someReducer.js
const initialState = {
  kundliReport: "",
  };
  
  const AdKundliReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_KUNDLI_REPORT':
        return {
            ...state,
            kundliReport: action.payload,
        };
        default:
          return state;
    }
  };
  
  export default AdKundliReducer;
  