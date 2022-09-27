import React from "react";
import "./Card.css";
const Card1 = (props) => {
  return (
    <>
      <img src="./images/pp.jpg" alt="" />
      <h1>{props.title} </h1>
      <p> Total Balance:{props.balance} </p>
      <p>Quantity: {props.quantity}</p>
      <p>Rate: {props.rate}</p>
      <p>Amount : {props.amount}</p>
      <p>Profit/Loss Status: {props.proloss}</p>
      <p>NetBalance : {props.netbalance}</p>
    </>
  );
};

export default Card1;
