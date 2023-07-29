import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mockEmployed from "data/mockEmployed.js";

const initialState = {
  employee: {
    firstName: "",
    lastName: "",
  },
  employees: [],
  mockEmployed: mockEmployed,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMPLOYEE":
      return {
        ...state,
        employee: action.employee,
      };
    case "ADD_EMPLOYEE":
      console.log("Action ADD_EMPLOYEE dispatched with payload:", action.payload);
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
        case "CLEAR_EMPLOYEES":
          return {
            ...state,
            employees: [],
          };
      default:
        return state;
    }
  }

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["register"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);

export default store;
