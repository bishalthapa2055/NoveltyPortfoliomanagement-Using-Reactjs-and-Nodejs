import React, { useState } from "react";
import axios from "axios";

const Formcomponent = () => {
  const url = "http://127.0.0.1:5000/api/add";
  const [data, setData] = useState({
    SN: "",
    Stockname: "",
    TransactionType: "",
    Quantity: "",
    Rate: "",
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const submit = (event) => {
    event.preventDefault();
    axios
      .post(url, {
        // SN: Number(data.SN),
        // Stockname: data.Stockname,
        // TransactionType: data.TransactionType,
        // Quantity: Number(data.Quantity),
        // Rate: Number(data.Rate),
        SN: 9,
        Stockname: "HHHH",
        TransactionType: "BUY",
        Quantity: 200,
        Rate: 20,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <p>
          SN :{" "}
          <input
            type="number"
            onChange={(e) => handle(e)}
            id="SN"
            value={data.SN}
          />
          Stockname :{" "}
          <input
            type="text"
            onChange={(e) => handle(e)}
            value={data.Stockname}
            id="Stockname"
          />
          TransactionType :{" "}
          <select
            onChange={(e) => handle(e)}
            id="TransactionType"
            value={data.TransactionType}
          >
            <option>BUY</option>
            <option selected>SELL</option>
          </select>
          Quantity :{" "}
          <input
            type="text"
            onChange={(e) => handle(e)}
            id="Quantity"
            value={data.Quantity}
          />
          Rate :{" "}
          <input
            type="Number"
            onChange={(e) => handle(e)}
            id="Rate"
            value={data.Rate}
          />
        </p>
        <button>SUBMIT </button>
      </form>
    </>
  );
};

export default Formcomponent;
