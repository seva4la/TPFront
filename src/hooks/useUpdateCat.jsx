import axios from "axios";
import { api } from "../Const/const";

export const useUpdateCategory = () => {
  const handleButtonClick = async (title, id, trigger) => {
    console.log("handleButtonClick");
    const options = {
      method: "PUT",
      url: `${api}/categories/${id}?title=${title}`,
    };
    try {
      const response = await axios.request(options);
      console.log(response);
      console.log("s updatetd");
      trigger();
    } catch (error) {
      console.error(error);
    }
  };

  return handleButtonClick;
};
