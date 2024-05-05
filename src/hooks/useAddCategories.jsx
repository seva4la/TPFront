import axios from "axios";

export const useAddCategories = (title) => {
  console.log("title");
  console.log(title);
  const handleButtonClick = async () => {
    const options = {
      method: "POST",
      url: "http://127.0.0.1:8000/categories/creates",
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
