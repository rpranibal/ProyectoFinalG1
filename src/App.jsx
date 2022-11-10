import "../src/styles/intro.css";
import "../src/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Context from "./context/Provider";

import Intro from "../src/views/Intro";
import Home from "../src/views/Home";
import Profile from "../src/views/Profile";
import FichaProducto from "../src/views/FichaProducto";

export default function App() {
  const { isAuthenticated, PrivateRoute } = useContext(Context);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route
            path="/home"
            element={
              <PrivateRoute auth={{ isAuthenticated }}>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <PrivateRoute auth={{ isAuthenticated }}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/pizzas/:id"
            element={
              <PrivateRoute auth={{ isAuthenticated }}>
                <FichaProducto />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
