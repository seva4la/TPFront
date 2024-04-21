/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { MyButton } from "./button/MyButton";
import { Edit, Trash } from "tabler-icons-react";

export const CategoryItem = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.title}</strong>
          <div>{props.post.body}</div>
          <button>
            <Edit />{" "}
          </button>
          <button>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};
