import React from "react";
import PropTypes from "prop-types";

import "./index.css";

export default function BlogLists({ blogPosts }) {
  if (!blogPosts) return null;
  return (
    <div className="blog-list">
      {blogPosts?.map((post, index) => {
        return (
          <div
            key={index}
            className="blog-card"
            style={{ borderRadius: "8px", border: "1px solid #ccc" }}
          >
            <div
              className="blog-card-body"
              style={{
                backgroundColor: "#f8f9fa",
                position: "relative",
                zIndex: 1,
              }}
            >
              <h5 className="blog-card-title">{post.title}</h5>
            </div>
            <div className="blog-card-body">
              <p className="blog-card-text">
                {post.description.substring(0, 100)}...
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

BlogLists.propTypes = {
  blogPosts: PropTypes.array.isRequired,
};
