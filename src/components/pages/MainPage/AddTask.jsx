import { useCreateCategory } from "../../../hooks/useCreateCategory";
import { useState } from "react";
import { MyButton } from "../../button/MyButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useCreateTask } from "../../../hooks/useCreateTask";
import "./AddTask.css";
export const AddTask = ({ setVisisble, trigger, categories }) => {
  const navigate = useNavigate();
  const token = Cookies.get("userToken");

  const [catTitle, setCatTitle] = useState("");
  const [catDescription, setCatDescription] = useState("");
  const [catId, setCatId] = useState(categories[0].id);
  console.log(catId);
  const handleAddCategory = useCreateTask({
    catTitle,
    token,
    trigger,
    catId,
    catDescription,
  });
  console.log(catTitle, typeof catTitle);
  const handleChange = (event) => {
    setCatId(event.target.value);
  };
  return (
    <div className = "wintask">
      <h3 className="crtask">Создание задачи</h3>
      
      <input className ="entt"
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        type="text"
        placeholder="Название задачи"
      />
      <input className="entdesc"
        value={catDescription}
        onChange={(e) => setCatDescription(e.target.value)}
        type="text"
        placeholder="Описание задачи"
      />
  <div >
        <select className="chocat" onChange={handleChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <MyButton className ="createtask"
        onClick={() => {
          handleAddCategory();
          setVisisble(false);

          // trigger();
        }}
      >
        Создать{" "}
      </MyButton>
      <MyButton className ="cancelt"
        onClick={() => {
          setVisisble(false);
        }}
      >
        Отменить
      </MyButton>
    </div>
  );
};
