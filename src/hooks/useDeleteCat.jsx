import axios from "axios";

export const useDeleteCat = () => {
  const handleDelete = async (id, trigger) => {
    if (id) {
      const options = {
        method: "DELETE",
        url: `http://127.0.0.1:8000/categories/delete/${id}`,
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
