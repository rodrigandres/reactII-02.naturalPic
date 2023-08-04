import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import ImageProvider from "./context/ImageProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ImageProvider>
      <App />
    </ImageProvider>
  </BrowserRouter>
);
