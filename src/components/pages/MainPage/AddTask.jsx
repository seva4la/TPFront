import { useCreateCategory } from "../../../hooks/useCreateCategory";
import { useState } from "react";
import { MyButton } from "../../button/MyButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useCreateTask } from "../../../hooks/useCreateTask";
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
    <div>
      <div>
        <select onChange={handleChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <input
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={catDescription}
        onChange={(e) => setCatDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />

      <MyButton
        onClick={() => {
          handleAddCategory();
          setVisisble(false);

          // trigger();
        }}
      >
        создать{" "}
      </MyButton>
    </div>
  );
};
