import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { api } from "../Const/const";
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
      url: `${api}/user/authentication_user?username=${form.firstName}&password=${form.password}`,
    };

    try {
      const response = await axios.request(options);
      console.log("try");
      console.log(response.data);

      console.log("User auth");
      Cookies.set("userToken", `${response.data.id}`);
      navigate("/");
    } catch (error) {
      console.error(error);
      console.log(error.response);

      alert(
        "Пользователь не найден. Попробуете зарегестрироваться или изменить введённые данные"
      );
    }
  };
  //http://127.0.0.1:1212/user/authentication_user?username=1srtring&password=srtring
  //http://127.0.0.1:1212/user/authentication_user?username=1string&password=string
  return handleButtonClick;
};
