import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

store.dispatch(fetchAllPosts());
store.dispatch(fetchAllUsers());

/* The following line can be included in styles */
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchAllUsers } from "./utils/lib/fetchUserData.js";
import { fetchAllPosts } from "./utils/lib/fetchPostData.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
