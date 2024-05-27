import { useCreateCategory } from "../../../hooks/useCreateCategory";
import { useState } from "react";
import { MyButton } from "../../button/MyButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./AddCategory.css";
export const AddCategory = ({ setVisisble, trigger }) => {
  const navigate = useNavigate();
  const token = Cookies.get("userToken");

  const [catTitle, setCatTitle] = useState("");
  const handleAddCategory = useCreateCategory(catTitle, token, trigger);
  console.log(catTitle, typeof catTitle);

  return (
    <div className = "win">
      <h3 className="crcat">Создание категории</h3>
      <input className ="ent"
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        type="text"
        placeholder="Введите название"
      />

      <MyButton className ="create"
        onClick={() => {
          handleAddCategory();
          setVisisble(false);

          // trigger();
        }}
      >
        Создать{" "}
      </MyButton>
      <MyButton className ="cancel"
        onClick={() => {
          setVisisble(false);
        }}
      >
        Отменить
      </MyButton>
    </div>
  );
};
