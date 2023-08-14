import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
store.dispatch(fetchAllUsers());

/* The following line can be included in styles */
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllUsers } from "./utils/lib/fetchUserData.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
