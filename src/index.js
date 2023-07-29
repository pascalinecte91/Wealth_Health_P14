import React from "react";
import { createRoot } from "react-dom/client"; // Importez createRoot depuis "react-dom/client"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "redux/store";
import App from "./App";

// Utilisez createRoot au lieu de ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
