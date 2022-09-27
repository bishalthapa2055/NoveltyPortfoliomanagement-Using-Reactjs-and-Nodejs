import React, { useState } from "react";
import axios from "axios";

const Formcomponent2 = () => {
  const [SN, setSN] = useState("");
  const [Stockname, setStockname] = useState("");
  const [TransactionType, setTransactiontType] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Rate, setRate] = useState("");

  const handleSN = (e) => {
    setSN(e.target.value);
  };
  const handleStockname = (e) => {
    setStockname(e.target.value);
  };
  const handleTransactionType = (e) => {
    setTransactiontType(e.target.value);
    console.log(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleRate = (e) => {
    setRate(e.target.value);
  };
  console.log(SN, Stockname, TransactionType, Quantity, Rate);
  const handleApi = () => {
    console.log(SN, Stockname, TransactionType, Quantity, Rate);
    axios
      .post("http://localhost:5000/api/add", {
        SN: SN,
        Stockname: Stockname,
        TransactionType: TransactionType,
        Quantity: Quantity,
        Rate: Rate,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>
        TRADING <span>( BUY / SELL )</span> DEPARTMENT SECTION{" "}
      </h2>
      <p>Please Fill the required field to buy / sell stocks :</p>
      <br />
      <br />
      <form>
        <p>
          SN : <input type="number" onChange={handleSN} id="SN" value={SN} />
          Stockname :{" "}
          <input
            type="text"
            onChange={handleStockname}
            value={Stockname}
            id="Stockname"
          />
          TransactionType :{" "}
          <select
            onChange={handleTransactionType}
            id="TransactionType"
            value={TransactionType}
          >
            <option selected>BUY</option>
            <option>SELL</option>
          </select>
          Quantity :{" "}
          <input
            type="text"
            onChange={handleQuantity}
            id="Quantity"
            value={Quantity}
          />
          Rate :{" "}
          <input type="Number" onChange={handleRate} id="Rate" value={Rate} />
        </p>
        <button onClick={handleApi}>SUBMIT </button>
      </form>
    </>
  );
};

export default Formcomponent2;
