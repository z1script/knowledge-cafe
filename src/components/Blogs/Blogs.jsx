import React, {useEffect, useState} from "react";
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  let [readTime, setReadTime] = useState(0);
  let [bookmark, setBookmark] = useState([]);

  const newBookmark = (title) => {
    bookmark = [title];
    setBookmark(bookmark);
  };

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const newReadTime = (time) => {
    readTime = readTime + time;
    setReadTime(readTime);
  };

  return (
    <div className="main-container">
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            newReadTime={newReadTime}
            newBookmark={newBookmark}></Blog>
        ))}
      </div>
      <div className="sidebar">
        <Sidebar time={readTime} bookmark={bookmark}></Sidebar>
      </div>
    </div>
  );
};

export default Blogs;
