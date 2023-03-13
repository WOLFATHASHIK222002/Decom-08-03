import React, { useState } from "react";
import { categories, herodata } from "../utils/data";
import "./Nav.css";
import Scrollimg from "../Homecontainer/Scrollimg";
const Menu = () => {
  const [filter, setfilter] = useState("checked_shirt");
  return (
    <section>
      <div>
        <div className="discbar">
          <span>CATEGORES OF SHIRT</span>
        </div>
        <div className="filter-main">
          {categories &&
            categories.map((category) => (
              <div key={category.id} className="filter-content">
                <div></div>
                <p onClick={<Scrollimg />}>{category.name}</p>
              </div>
            ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default Menu;
