import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";

const Blog = (props) => {
  const {author, title, profile, cover, readTime, published} = props.blog;
  const newReadTime = props.newReadTime;
  const newBookmark = props.newBookmark;

  return (
    <div className="blog">
      <img className="cover" src={cover} alt="" />
      <div className="blog-info-container">
        <div className="blog-info">
          <img className="profile" src={profile} alt="" />
          <div>
            <h2>{author}</h2>
            <p>{published}</p>
          </div>
        </div>
        <div>
          <p className="read-time">
            {readTime} min Read
            <button onClick={() => newBookmark(title)}>
              <FontAwesomeIcon className="bookmark" icon={faBookmark} />
            </button>
          </p>
        </div>
      </div>
      <h2 className="blog-title">{title}</h2>
      <button onClick={() => newReadTime(readTime)}>Mark as Read</button>
    </div>
  );
};

export default Blog;
