import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mockEmployed from "data/mockEmployed.js";

/**
 * État initial du store Redux.
 * @typedef {Object} InitialState
 * @property {Object} employee - L'employé avec les propriétés firstName et lastName.
 * @property {string[]} employees - Liste des employés.
 * @property {Object[]} mockEmployed - Liste simulée des employés (mocked).
 */
const initialState = {
  employee: {
    firstName: "",
    lastName: "",
  },
  employees: [],
  mockEmployed: mockEmployed,
};


/**
 * Reducer Redux pour gérer les actions et mettre à jour l'état du store.
 * @param {InitialState} state - L'état initial du store.
 * @param {Object} action - L'action à traiter.
 * @returns {InitialState} Le nouvel état mis à jour du store.
 */
const reducer = (state = initialState, action) => {
  switch (action.type) { // update eventuel
    // case "SET_EMPLOYEE":
    //   return {
    //     ...state,
    //     employee: action.employee,
    //   };
    case "ADD_EMPLOYEE":
      console.log("Action ADD_EMPLOYEE dispatched with payload:", action.payload);
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
        case "CLEAR_EMPLOYEES":
          console.log("Action CLEAR_EMPLOYEE dispatched with payload:", action.payload);
          return {
            ...state,
            employees: [],
          };
      default:
        return state;
    }
  }

  /**
 * Configuration pour la persistance du store Redux.
 * @typedef {Object} PersistConfig
 * @property {string} key - où les données sont stockées.
 * @property {Object} storage - Le mécanisme de stockage (localStorage, etc.).
 * @property {string[]} blacklist - Liste des clés à exclure de la persistance.
 */
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
