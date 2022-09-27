import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Displaycomponent2.css";

const Displaycomponent2 = () => {
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
  console.log(posts);
  return (
    <>
      {/* {posts.data &&
        posts.data.map((post) => (
          <div key={post.SN}>
            <p>
              SN : {post.SN}
              Stockname : {post.Stockname}
              Quantity : {post.Quantity}
              TransactionType : {post.TransactionType}
              Rate : {post.Rate}
              Amount : {post.Amount}
            </p>
          </div>
        ))} */}
      <h2>
        OVERALL <span>TRANSACTION </span>DISPLAY LISTS{" "}
      </h2>
      <table style={{ width: `100%` }}>
        <thead>
          <tr>
            <th>SN</th>
            <th>Stockname</th>
            <th>TransactionType</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>TransactionDate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {posts.data &&
            posts.data.map((post) => (
              <tr>
                <td>{post.SN}</td>
                <td>{post.Stockname}</td>
                <td>{post.TransactionType}</td>
                <td>{post.Quantity}</td>
                <td>{post.Rate}</td>
                <td>{post.TransactionDate}</td>
                <td>{post.Amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <table>
        <thead>
          <tr>
            {posts.data.map((post) => {
              return <th key={post.SN}>{post.Stockname}</th>;
            })}
          </tr>
        </thead>
      </table> */}
    </>
  );
};

export default Displaycomponent2;
