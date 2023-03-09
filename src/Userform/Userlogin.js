import React from "react";

const Register = () => {
  const passvalue = document.getElementById("signpass");
  const confirm = document.getElementById("signconfirm");
  function Trigger() {
    if (passvalue === confirm) {
      alert("varify!!");
    } else {
      alert("confirm password wrong!!");
    }
  }

  return (
    <>
      <div>
        <label>Enter your Name:</label>
        <input type="text" required />
        <label>Enter your Email id:</label>
        <input type="email" />
        <label>Enter your password:</label>
        <input id="signpass" type="password" />
        <label>Enter your confirm password:</label>
        {passvalue === confirm && passvalue !== null
          ? alert("your password is match")
          : alert("your passsword not match")}
        <input id="signconfirm" type="password" />
        <input type="button" value="save" onClick={Trigger} />
      </div>
    </>
  );
};
export default Register;
