import React, {useEffect, useState} from "react";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <></>;
};

export default Blogs;
