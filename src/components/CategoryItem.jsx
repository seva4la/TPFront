/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Edit, Trash } from "tabler-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../store/category/category.slice";

export const CategoryItem = ({ post, onDelete }) => {
  const catTitle = useSelector((state) => state.category);

  /*<strong>{post.title}</strong>
  <div>{post.body}</div>*/
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <div>{post.title}</div>
          <button>
            <Edit />
          </button>
          <button onClick={onDelete}>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};
