import React from "react";
import { Link, Outlet } from "react-router-dom";
import MinBedroom from "./MinBedroom";

const Project = () => {
  return (
    <div className="project">
      <header className="project-header">
        <h1>Our Projects</h1>
      </header>
      <aside>
        <div className="project-nav container">
          <button>
            <Link to={"bathroom"}>Bathroom</Link>
          </button>
          <button>
            <Link to={"bedroom"}>Bedroom</Link>
          </button>
          <button>
            <Link to={"kitchen"}>Kitchen</Link>
          </button>
        </div>
        <div className="project-list container">
          <MinBedroom />
        </div>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Project;
