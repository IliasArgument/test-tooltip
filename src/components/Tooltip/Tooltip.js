import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import "./Tooltip.css";

const Tooltip = () => {
  return (
    <div className="container">
      <div>
        <h1 className="tooltip-h1">Tooltip</h1>
      </div>
      <div className="container-menu">
        <div className="menu">
          <span className="triangle">▲</span>
          <div className="content">
            <p className="content-title">
              This fee is taken for each trade on the platform for any items in
              this collection.
            </p>
            <p className="content-active">
              <Link className='link' to="/collection">
              <Button color="primary">READ MORE</Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tooltip;
