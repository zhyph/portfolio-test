import React from "react";
import "./App.css";

function Thumbnail({ link, title, category, image, height }) {
  return (
    <div>
      <div className="project-link">
        <div className="project-image">
          <img
            src={image}
            alt="Project"
            style={{ height: height ? height : "auto" }}
          />
        </div>
        <div className="project-title">{title}</div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="project-category">{category}</div>
        </a>
      </div>
    </div>
  );
}

export default Thumbnail;
