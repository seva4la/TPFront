import { useEffect, useState } from "react";

export const useTasksGetWithId = ({ trigger, data, isLoading, token }) => {
  const [userCat, setUserCat] = useState([]);
  const [categories, setCategories] = useState();
  useEffect(() => {
    trigger();
  }, [trigger]);

  useEffect(() => {
    if (data && !isLoading) {
      setCategories(data);
    }
  }, [data, isLoading]);
  useEffect(() => {
    if (categories) {
      const filteredCats = categories.filter((cat) => cat.user_id === token);
      setUserCat(filteredCats);
    }
  }, [categories, token]);

  return userCat;
  //return categories;
};
