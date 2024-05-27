/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Edit, Trash } from "tabler-icons-react";
import { useDeleteTask } from "../hooks/useDeleteTask";
import "./TaskItem.css";

export const TaskItem = ({
  post,
  onUpdateId,
  trigger,
  setModalUpdateCat,
  setCatId,
}) => {
  const handleDelete = useDeleteTask();
  //onClick={setModalUpdateCat(true)}
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <div className="boxtas">{post.title}</div>
          <button className="edtasit"
            onClick={() => {
              setCatId(post.id);
              setModalUpdateCat(true);
            }}
          >
            <Edit />
          </button>
          <button className="trtasit"
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
