import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Project = () => {
  return (
    <div className="project">
      <header className="project-header">
        <h1>Our Projects</h1>
      </header>
      <aside>
        <div className="project-nav container">
          <NavLink
            className="NavLink"
            to="bathroom"
            activeClassName="active-button"
          >
            <button>Bathroom</button>
          </NavLink>
          <NavLink
            className="NavLink"
            to="bedroom"
            activeClassName="active-button"
          >
            <button>Bedroom</button>
          </NavLink>
          <NavLink
            className="NavLink"
            to="kitchen"
            activeClassName="active-button"
          >
            <button>Kitchen</button>
          </NavLink>
        </div>
        <div className="project-list container"></div>
      </aside>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Project;
