import React from "react";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import { Button } from "@material-ui/core";
import "./Card.css";

const Card = ({ per, canisterId, recId, state }) => {
  return (
    <div className="card">
      <div className="title">
        <span className="icon">{<BorderAllIcon />}</span>
        <h1>About NFT SKU2</h1>
      </div>
      <div className="border"></div>
      <div>
        <div className="card-title">
          <span>Fee</span>
          <p>{per}</p>
        </div>
        <div className="card-title">
          <span>Canister Principal ID</span>
          <p>{canisterId}</p>
        </div>
        <div className="card-title">
          <span>RecipientPrincipal ID</span>
          <p>{recId}</p>
        </div>
        {state ? (
          <div className="btn-block">
            <Button color="primary" onClick={() => console.log("edit")}>
              Edit
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Card;
