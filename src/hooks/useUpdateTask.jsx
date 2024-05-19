import axios from "axios";
import { api } from "../Const/const";

export const useUpdateTask = () => {
  const handleButtonClick = async ({
    title,
    task_id,
    description,
    trigger,
  }) => {
    console.log("handleButtonClick");
    const options = {
      method: "PUT",
      url: `${api}/tasks/${task_id}?title=${title}&description=${description}`,
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
