import {WRITEFORM} from "../types/profile"

const initialState = {
  form: {
    firstName: "",
    lastName: "",
    email: "",
    biografy: "",
    imageURL: "",
  },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITEFORM:
      return {form:action.payload}
      default:
        return state;
  }
};
