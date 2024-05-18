import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useUserRegister = (form) => {
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    console.log(form);
    if (!form) {
      console.error("Form data is undefined");
      return;
    }

    const options = {
      method: "POST",
      url: "http://127.0.0.1:8000/user/register_user",
      data: {
        username: form.firstName, // Обращаемся к свойству напрямую
        password: form.password,
        password1: form.password1,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      console.log("User registered");
      navigate("/sign-in");
    } catch (error) {
      console.error(error);
    }
  };

  return handleButtonClick;
};
