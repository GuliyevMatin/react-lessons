import { INCREMENT, SET_MOVIE } from "../types/home";

const initalState = {
  count: 0,
  movies:[]
};

export const homeReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
        return {...state,count : state.count + 1}
    case SET_MOVIE:
      return { ...state,movies: action.payload } 
    default:
      return state;
  }
};
