import React from "react";

function TeamBlock(props) {
  return (
    <li>
      <div className="img-holder">
        <img src={props.people} alt="image description" />
      </div>
      <h4>
        <a href="/">Namhee Kim</a>
      </h4>
      <span className="sub-title">Jewelry designer</span>
    </li>
  );
}

export default TeamBlock;
