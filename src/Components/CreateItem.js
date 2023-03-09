import React, { useState } from "react";
import "./Nav.css";
import { categories } from "../utils/data";
import Loader from "./Loader";
import upload from "../images/upload.png";
import { storage } from "./firebase.config";
import { db } from "./firebase.config";
import FileBase64 from "react-file-base64";
import { collection, addDoc } from "firebase/firestore";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [category, setcategory] = useState(null);
  const [Productname, setProductName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [price, setprice] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsset, setImageAsset] = useState(null);

  const addProduct = () => {
    console.log(imageAsFile);
    const userRef = collection(db, "customersData");
    addDoc(userRef, {
      image: imageAsFile.base64,
    });
  };

  return (
    <>
      <div className="container2">
        <div className="createinp">
          <input
            type="text"
            value={title}
            placeholder="Give me titile"
            onChange={(e) => setTitle(e.target.value)}
            className="inptext"
          />
        </div>
        <div className="createselect">
          <select
            className="selectop"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="other" className="bg-white">
              Select categories
            </option>
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none bg-white"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        {/* image added */}
        <div className="uploadimgmain">
          <div className="uploadimg">
            <img height="200" width="300" src={imageAsFile.base64}></img>
          </div>
        </div>

        <FileBase64
          multiple={false}
          onDone={(e) => {
            setImageAsFile(e);
          }}
        ></FileBase64>
        <div className="createinp">
          <input
            type="text"
            value={Productname}
            onChange={(e) => setProductName(e.target.value)}
            required
            placeholder="Product Name"
            className="inptext"
          />
        </div>
        <div className="createinp">
          <input
            type="text"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required
            placeholder="Product Price"
            className="inptext"
          />
        </div>
        <div>
          <button className="createbutton1" onClick={addProduct} type="button">
            SAVE
          </button>
        </div>
      </div>
    </>
  );
};
export default CreateItem;
