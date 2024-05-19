import axios from "axios";
import { api } from "../Const/const";

export const useDeleteCat = () => {
  const handleDelete = async (id, trigger) => {
    if (id) {
      const options = {
        method: "DELETE",
        url: `${api}/categories/delete/${id}`,
      };
      try {
        const response = await axios.request(options);
        console.log(response);
        console.log("Category deleted");
        trigger();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return handleDelete;
};
