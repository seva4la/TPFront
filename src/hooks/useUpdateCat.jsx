import axios from "axios";

export const useUpdateCategory = () => {
  const handleButtonClick = async (title, id, trigger) => {
    console.log("handleButtonClick");
    const options = {
      method: "PUT",
      url: `http://127.0.0.1:8000/categories/${id}?title=${title}`,
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
