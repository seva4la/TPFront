/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Edit, Trash } from "tabler-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../store/category/category.slice";
import { useDeleteCat } from "../hooks/useDeleteCat";

export const CategoryItem = ({ post, onDelete, trigger }) => {
  const handleDelete = useDeleteCat();
  const catTitle = useSelector((state) => state.category);
  const handleDeleteCategory = () => {
    onDelete();
  };

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
          <button
            onClick={() => {
              handleDelete(post.id, trigger);
              trigger();
            }}
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};
