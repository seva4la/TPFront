import { useCreateCategory } from "../../../hooks/useCreateCategory";
import { useState } from "react";
import { MyButton } from "../../button/MyButton";
import Cookies from "js-cookie";
export const AddCategory = () => {
  const token = Cookies.get("userToken");

  const [catTitle, setCatTitle] = useState("");
  const handleAddCategory = useCreateCategory(catTitle, token);
  console.log(catTitle, typeof catTitle);
  return (
    <div>
      <input
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        type="text"
        placeholder="Name"
      />

      <MyButton onClick={handleAddCategory}>создать </MyButton>
    </div>
  );
};
