import { useCreateCategory } from "../../../hooks/useCreateCategory";
import { useState } from "react";
import { MyButton } from "../../button/MyButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const AddCategory = ({ setVisisble, trigger }) => {
  const navigate = useNavigate();
  const token = Cookies.get("userToken");

  const [catTitle, setCatTitle] = useState("");
  const handleAddCategory = useCreateCategory(catTitle, token, trigger);
  console.log(catTitle, typeof catTitle);

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
