import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export const useUserAuth = (form) => {
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    console.log(form);
    if (!form) {
      console.error("Form data is undefined");
      return;
    }

    const options = {
      method: "POST",
      url: `http://127.0.0.1:8000/user/authentication_user?username=${form.firstName}&password=${form.password}`,
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      console.log("User auth");
      Cookies.set("userToken", `${response.data.id}`);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return handleButtonClick;
};
