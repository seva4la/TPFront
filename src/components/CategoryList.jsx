/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CategoryItem } from "./CategoryItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { useGetCategories } from "../hooks/useGetCategories";
import { useUpdateCategory } from "../hooks/useUpdateCat";
import { useState } from "react";

import { MyModal } from "./MyModal/MyModal";
import { UpdateCat } from "./pages/MainPage/UpdateCat";

export const CategoryList = ({ trigger, data, isLoading, token }) => {
  const [modalUpdateCat, setModalUpdateCat] = useState(false);
  const [catId, setCatId] = useState();

  const categories = useGetCategories({ trigger, data, isLoading, token });

  if (!categories || categories.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Категории не найдены</h2>;
  }

  return (
    <div>
      {data && (
        <>
          {categories.map((post, index) => (
            <>
              <CategoryItem
                number={index + 1}
                post={post}
                trigger={trigger}
                setCatId={setCatId}
                setModalUpdateCat={setModalUpdateCat}
              />
            </>
          ))}
        </>
      )}
      {modalUpdateCat && (
        <MyModal visible={modalUpdateCat} setVisisble={setModalUpdateCat}>
          <UpdateCat
            id={catId}
            setVisisble={setModalUpdateCat}
            trigger={trigger}
            isLoading={isLoading}
          />
        </MyModal>
      )}
    </div>
  );
};
