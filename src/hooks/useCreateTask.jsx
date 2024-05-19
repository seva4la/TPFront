import axios from "axios";
import { api } from "../Const/const";

export const useCreateTask = ({
  catTitle,
  token,
  trigger,
  catDescription,
  catId,
}) => {
  const handleButtonClick = async () => {
    console.log("handleButtonClick");
    const options = {
      method: "POST",
      url: `${api}/tasks/create`,
      data: {
        title: `${catTitle}`,
        description: `${catDescription}`,
        category_id: `${catId}`,
        user_id: `${token}`,
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response);
      console.log("s added");
      trigger();
    } catch (error) {
      console.error(error);
    }
  };

  return handleButtonClick;
};
