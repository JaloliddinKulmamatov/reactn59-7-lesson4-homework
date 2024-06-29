import React from "react";
import MinBedroom from "./MinBedroom";


const Project = () => {
  return (
    <div className="project">
      <header className="project-header">
        <h1>Our Projects</h1>
      </header>
      <div className="project-nav container">
        <button>Bathroom</button>
        <button className="bedroom-btn">Bed Room</button>
        <button>Kitchan</button>
        <button>Living Area</button>
      </div>
      <div className="project-list container">
        <MinBedroom>
          <img src="./badroom.png" alt="abc" />
        </MinBedroom>
        <MinBedroom>
          <img src="./badroom2.png" alt="abc" />
        </MinBedroom>
        <MinBedroom>
          <img src="./Rectangle 29.png" alt="abc" />
        </MinBedroom>
        <MinBedroom>
          <img src="./Rectangle 30.png" alt="abc" />
        </MinBedroom>
        <MinBedroom>
          <img src="./Rectangle 31.png" alt="abc" />
        </MinBedroom>
        <MinBedroom>
          <img src="./Rectangle 32.png" alt="abc" />
        </MinBedroom>
      </div>
    </div>
  );
};

export default Project;
