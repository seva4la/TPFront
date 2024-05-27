import React from "react";
import { useCreateCategory } from "../../../hooks/useCreateCategory";
import { useState } from "react";
import { MyButton } from "../../button/MyButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useUpdateCategory } from "../../../hooks/useUpdateCat";
import "./UpdateCat.css";

export const UpdateCat = ({ setVisisble, trigger, id }) => {
  const [catTitle, setCatTitle] = useState("");
  const handleUpdate = useUpdateCategory();
  return (
    <div className = "winch">
      <h3 className="chcat">Редактирование категории</h3>
      <input 
        className ="entch"
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        type="text"
        placeholder="Введите название"
      />

      <MyButton className ="chan"
        onClick={() => {
          handleUpdate(catTitle, id, trigger);
          setVisisble(false);
          trigger();
        }}
      >
        Обновить
      </MyButton>
      <MyButton className ="cancelch"
        onClick={() => {
          setVisisble(false);
        }}
      >
        Отмена
      </MyButton>
    </div>
  );
};
