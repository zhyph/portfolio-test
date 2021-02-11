import React from "react";

function About() {
  return (
    <div>
      <img
        className="about-img"
        src="https://images.unsplash.com/photo-1613005341945-35e159e522f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
        alt="Portfolio Owner"
      />
      <h2 id="about-h2">About me</h2>
      <div className="about">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ut temporibus doloribus ipsa dolorem ratione aperiam, cumque maiores
          deserunt at blanditiis asperiores nisi consequuntur soluta odit
          tempora quisquam tempore sapiente.
        </p>
      </div>
    </div>
  );
}

export default About;
