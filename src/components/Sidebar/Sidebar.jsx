import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="spent-time">
        <h2>
          Spent Time On Read: <span>{props.time}</span> Min
        </h2>
      </div>
      <div className="bookmark-container">
        <h3>Bookmarked Blogs: {props.bookmark.length}</h3>
        <div className="bookmarked">{props.bookmark}</div>
      </div>
    </div>
  );
};

export default Sidebar;
