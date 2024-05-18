/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Edit, Trash } from "tabler-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteCat } from "../hooks/useDeleteCat";

export const CategoryItem = ({
  post,
  onUpdateId,
  trigger,
  setModalUpdateCat,
  setCatId,
}) => {
  const handleDelete = useDeleteCat();
  //onClick={setModalUpdateCat(true)}
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <div>{post.title}</div>
          <button
            onClick={() => {
              setCatId(post.id);
              setModalUpdateCat(true);
            }}
          >
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
