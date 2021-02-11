import React from "react";
import Thumbnail from "./Thumbnail";
import Imgix from "react-imgix";
import "./App.css";

function Project() {
  return (
    <div className='divinadiv'>
      <div className="project">
        <Thumbnail
          link="http://www.twitter.com"
          image="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png"
          title="Twitter Website"
          category="Website"
        />
        <Thumbnail
          link="https://unsplash.com/photos/BP5PxOnD3jo"
          image="https://images.unsplash.com/photo-1591662534117-b9d328dab8bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
          title="Skógafoss, Iceland"
          category="Photo"
          // height="401px"
        />
        <Thumbnail
          link="https://unsplash.com/photos/HHxYyhQQFbc"
          image="https://images.unsplash.com/photo-1612815292258-f4354f7f5c76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title="Gray Asphalt"
          category="Photo"
        />
        <Thumbnail
          link="https://unsplash.com/photos/nSsdyEK5U1Q"
          image="https://images.unsplash.com/photo-1613031708184-98dd528dad15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1226&q=80"
          title="Landscape"
          category="Photo"
        />
      </div>
    </div>
  );
}

export default Project;
