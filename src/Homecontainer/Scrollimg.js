import React, { useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import "../Components/Nav.css";
import { herodata } from "../utils/data";

const Scrollimg = ({ mydata }) => {
  const [cartitem, setcartitems] = useState([]);

  function addtocart(item) {
    setcartitems([...cartitem, item]);
  }
  return (
    <>
      <div className="blockname">LATEST BLOCK</div>
      <div className="scrollmain carousel-inner">
        {herodata.map((item) => (
          <div className="imagesection item">
            <div className="Imageconatiner">
              <img src={item.imagesrc} />
            </div>
            <div className="imgtext">
              <h1 className="scroll-img-title">{item.name}</h1>
              <p className="scroll-offer">
                <span>40%</span>off
              </p>
              <h3 className="scroll-decode">
                <span>$500</span> ${item.price}
              </h3>
            </div>
            <div className="imgorderbutton">
              <button onClick={() => addtocart(item)}>BUY NOW</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Scrollimg;
