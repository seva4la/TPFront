import { useEffect, useState } from "react";
import axios from "axios";

export const useGetCategories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const func = async () => {
      const options = {
        method: "GET",
        url: "http://127.0.0.1:8000/categories/get",
      };

      try {
        const response = await axios.request(options);
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    func();
  }, []);

  return categories;
};
