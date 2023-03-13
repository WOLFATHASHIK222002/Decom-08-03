import React, { useState } from "react";
import Imageslide from "../Homecontainer/Slideimages";
import Scrollimg from "../Homecontainer/Scrollimg";
import "./Nav.css";
import Menu from "./Menuitem";
import indexvideo from "../images/videoplay.mp4";
import { MenuItem } from "@mui/material";
import Productlist from "../Homecontainer/productlist";
import { Myapp } from "../utils/data";
import Footermain from "./Footer";
const MainContainer = () => {
  return (
    <>
      <div className="slidenote">
        <p>EVERY_SUNDAY_20%_OFFER</p>
      </div>

      <div className="mainstyle">
        <div className="discbar">
          <span>Let's Go!</span>
        </div>
        <div>
          <Imageslide />
        </div>
        <div className="discbar">
          <span>MEN COLLECTION</span>
        </div>
        <div>
          <Scrollimg />
        </div>
        <MenuItem />
        <Menu />
        <div>
          <Myapp change={false} />
        </div>
      </div>
      <Footermain />
    </>
  );
};
export default MainContainer;
