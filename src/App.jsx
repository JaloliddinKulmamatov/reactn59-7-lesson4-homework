import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.svg";
import Sevice from "./components/Sevice";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Project from "./components/Project";
import searhBtn from "./assets/searchBtn.svg";
import MinBedroom from "./components/MinBedroom";
import MinBath from "./components/MinBath";
import MinKitchen from "./components/MinKitchen"

function App() {
  return (
    <Router>
      <div>
        <header className="navbar">
          <nav className="container">
            <ul>
              <li>
                <img src={logo} alt="logo" />
                <h1>SELHONO</h1>
              </li>
              <span className="nav__links">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>
                  <NavLink to="/Sevice">Sevice</NavLink>
                </li>
                <li>
                  <NavLink to="/Project">Project</NavLink>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <img src={searhBtn} alt="search" />
                </li>
              </span>
            </ul>
          </nav>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Sevice" element={<Sevice />} />
              <Route path="/Project/*" element={<Project />}>
                <Route path="bedroom" element={<MinBedroom />} />
                <Route path="bathroom" element={<MinBath />} />
                <Route path="kitchen" element={<MinKitchen />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
