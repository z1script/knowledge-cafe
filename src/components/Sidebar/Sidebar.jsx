import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="spent-time">
        <h2>
          Spent Time On Read: <span>0</span> Min
        </h2>
      </div>
      <div className="bookmark-container"></div>
    </div>
  );
};

export default Sidebar;
