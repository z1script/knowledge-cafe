import React, {useEffect, useState} from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";

import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="main-container">
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Blogs;
