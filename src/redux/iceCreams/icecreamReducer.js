import { types } from "./icecreamTypes";

const initialState = {
  numOfIcecreams: 20
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1
      };
    default:
      return state;
  }
};

export default icecreamReducer;
