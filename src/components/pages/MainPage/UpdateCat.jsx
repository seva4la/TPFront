import React from "react";
import { useCreateCategory } from "../../../hooks/useCreateCategory";
import { useState } from "react";
import { MyButton } from "../../button/MyButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useUpdateCategory } from "../../../hooks/useUpdateCat";

export const UpdateCat = ({ setVisisble, trigger, id }) => {
  const [catTitle, setCatTitle] = useState("");
  const handleUpdate = useUpdateCategory();
  return (
    <div>
      <input
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        type="text"
        placeholder="Name"
      />

      <MyButton
        onClick={() => {
          handleUpdate(catTitle, id, trigger);
          setVisisble(false);
          trigger();
        }}
      >
        обновить название категории
      </MyButton>
    </div>
  );
};
