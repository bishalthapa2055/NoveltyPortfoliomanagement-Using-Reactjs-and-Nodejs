import React, { useState, useEffect } from "react";
import "./Card.css";
import Card1 from "./Card1";
import axios from "axios";

const Card = () => {
  const [posts, setposts] = useState([]);
  const url = "http://127.0.0.1:5000/api/display";
  useEffect(() => {
    axios
      //   .get("https://jsonplaceholder.typicode.com/posts")
      .get(url)
      .then((data) => {
        // console.log(data);
        setposts({ ...data.data });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2>
        NOVELTY TECHNOLOGY <span>PROFIT / LOSS </span>DEPARTMENT SYSTEM{" "}
      </h2>

      <div id="mainbox">
        {posts.data &&
          posts.data.map((post) => (
            <div className="card">
              <Card1
                title={post.Stockname}
                balance={post.TotalBalance}
                quantity={post.Quantity}
                rate={post.Rate}
                amount={post.Amount}
                proloss={post.Status}
                netbalance={post.NetBalance}
              />
            </div>
          ))}
        {/* <div class="card">
          <Card1
            title="NABBC"
            balance="10000"
            quantity="200"
            rate="200"
            amount="20000"
            proloss="loss"
          />
        </div>
        <div class="card">
          <Card1
            title="AKPL"
            balance="10000"
            quantity="200"
            rate="200"
            amount="20000"
            proloss="loss"
          />
        </div>
        <div class="card">
          <Card1
            title="UPPER"
            balance="10000"
            quantity="200"
            rate="200"
            amount="20000"
            proloss="loss"
          />
        </div>
        <div class="card">
          <Card1
            title="API"
            balance="10000"
            quantity="200"
            rate="200"
            amount="20000"
            proloss="loss"
          />
        </div>
        <div class="card">
          <Card1
            title="UPCL"
            balance="10000"
            quantity="200"
            rate="200"
            amount="20000"
            proloss="loss"
          />
        </div>
        <div class="card">
          <Card1
            title="BARUN"
            balance="10000"
            quantity="200"
            rate="200"
            amount="20000"
            proloss="loss"
          />
        </div> */}
      </div>
    </>
  );
};

export default Card;
