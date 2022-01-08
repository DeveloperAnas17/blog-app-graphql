import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.excerpts}
    </div>
  );
};

export default PostCard;
