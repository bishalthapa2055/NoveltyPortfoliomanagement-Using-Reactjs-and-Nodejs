import React, { useEffect, useState } from "react";
import axios from "axios";
const Displaycomponent = () => {
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
      {posts.data &&
        posts.data.map((post) => (
          <div key={post.SN}>
            <p>
              {post.SN}:{post.Stockname}:{post.Quantity}:{post.TransactionType}:
              {post.Rate}:{post.Amount}
            </p>
          </div>
        ))}
    </>
  );
};

export default Displaycomponent;
