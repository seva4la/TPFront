/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CategoryItem } from "./CategoryItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../store/category/category.slice";
import { useGetCategories } from "../hooks/useGetCategories";

export const CategoryList = ({ posts }) => {
  const categories = useGetCategories();
  console.log(categories);
  const dispatch = useDispatch();
  if (!categories) {
    return <h1 style={{ textAlign: "center" }}>Категории не найдены</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {categories.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <CategoryItem
              number={index + 1}
              post={post}
              onDelete={() => dispatch(deleteCategory(post.id))}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
