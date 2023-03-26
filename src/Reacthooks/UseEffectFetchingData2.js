import React, { useState, useEffect } from "react";
import axios from "axios";
//To Display loading when fetching data
//useState to manage components states i.e loading,error,post
//useEffect to handle SideEffects
//Axios for http call

const UseEffectFetchingData2 = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState("false");
  const [error, setError] = useState(" ");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "loading...." : post.title}
      {error ? error : null}
    </div>
  );
};

export default UseEffectFetchingData2;
