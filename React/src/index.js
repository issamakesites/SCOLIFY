import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginRight from "./components/LoginRight";
import App from "./App.js"
import axios from 'axios'

axios.defaults.baseURL='http://localhost:80/pfe/';



render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById("root")
);