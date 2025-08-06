import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import "./index.css";
import { ToastContainer} from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import RecipeContext from "./context/RecipeContext.jsx";


createRoot(document.getElementById("root")).render(
  <RecipeContext>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </RecipeContext>
);
