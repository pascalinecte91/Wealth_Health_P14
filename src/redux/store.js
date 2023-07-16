import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  employee: {
    firstName: "",
    lastName: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMPLOYEE":
      return {
        ...state,
        employee: action.employee,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
});

export default store;
