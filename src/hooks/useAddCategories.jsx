import axios from "axios";
import { api } from "../Const/const";

export const useAddCategories = (title) => {
  console.log("title");
  console.log(title);
  const handleButtonClick = async () => {
    const options = {
      method: "POST",
      url: `${api}/categories/creates`,
      data: { title: `${title}` },
    };
    try {
      const response = await axios.request(options);
      console.log(response);
      console.log("s added");
    } catch (error) {
      console.error(error);
    }
  };

  return handleButtonClick;
};
