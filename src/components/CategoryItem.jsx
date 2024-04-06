/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { MyButton } from "./button/MyButton";

export const CategoryItem = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
      </div>
    </div>
  );
};
