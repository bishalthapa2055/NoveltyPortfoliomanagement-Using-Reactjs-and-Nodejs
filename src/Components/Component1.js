import React, { useEffect, useState } from "react";
import axios from "axios";
const Component1 = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      //   .get("https://127.0.0.1:8000/display")
      .get("https://127.0.0.1:5000/api/display")
      .then((res) => {
        // console.log(res);
        setposts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
        {posts}
      </ul>
    </>
  );
};

export default Component1;
