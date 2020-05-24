import React from "react";
import svg from "../../../images/svg/rings.svg";

function Loader() {
  return (
    <div id="pre-loader" className="loader-container">
      <div className="loader">
        <img src={svg} alt="loader" />
      </div>
    </div>
  );
}

export default Loader;
