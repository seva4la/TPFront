import { useEffect, useState } from "react";

export const useGetCategories = ({ trigger, data, isLoading }) => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    trigger();
  }, [trigger]);

  useEffect(() => {
    if (data && !isLoading) {
      setCategories(data);
    }
  }, [data, isLoading]);

  return categories;
};
