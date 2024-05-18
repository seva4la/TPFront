/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CategoryItem } from "./CategoryItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/category/category.slice";
import { useGetCategories } from "../hooks/useGetCategories";
import { useEffect } from "react";
import { useGetCatWithId } from "../hooks/useGetCatWithId";
import { useDeleteCat } from "../hooks/useDeleteCat";
import { useState } from "react";

export const CategoryList = ({ posts, trigger, data, isLoading, token }) => {
  const categories = useGetCategories({ trigger, data, isLoading, token });

  const handleDelete = useDeleteCat();

  useEffect(() => {
    trigger();
  }, [trigger]);

  if (!categories || categories.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Категории не найдены</h1>;
  }
  /*
onDelete={() => {
                  handleDelete(post.id);
                  trigger();
                }}
*/
  return (
    <div>
      {data && (
        <TransitionGroup>
          {categories.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <CategoryItem number={index + 1} post={post} trigger={trigger} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </div>
  );
};
