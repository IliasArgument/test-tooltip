import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import Card from "../Card/Card";
import "./Collection.css";

const Collection = () => {
  const history = useHistory();
  return (
    <div className="collection">
      <div className="head">
        <span className="icons" onClick={() => history.goBack()}>
          <ArrowBackIosIcon />
        </span>
        <h1 className="collection-title">Collection details card</h1>
      </div>
      <div className="card-collection">
        <Card
          per={"5%"}
          canisterId={"6576uy67"}
          recId={"768uyi8755"}
          state={false}
        />
        <Card
           per={"5%"}
           canisterId={"6576uy67"}
           recId={"768uyi8755"}
           state={true}
        />
      </div>
    </div>
  );
};
export default Collection;
