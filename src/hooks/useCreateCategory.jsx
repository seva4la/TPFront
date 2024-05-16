import axios from "axios";

export const useCreateCategory = (title, token) => {
  console.log("title");
  console.log(title);
  const handleButtonClick = async () => {
    console.log("handleButtonClick");
    const options = {
      method: "POST",
      url: "http://127.0.0.1:8000/categories/creates",
      data: { title: `${title}`, user_id: `${token}` },
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
