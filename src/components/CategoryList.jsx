/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CategoryItem } from "./CategoryItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../store/category/category.slice";
import { useGetCategories } from "../hooks/useGetCategories";
import { useEffect } from "react";

export const CategoryList = ({ posts, trigger, data, isLoading }) => {
  const categories = useGetCategories({ trigger, data, isLoading });
  console.log(categories);
  const dispatch = useDispatch();
  React.useEffect(() => {
    trigger();
  }, []);

  if (!categories) {
    return <h1 style={{ textAlign: "center" }}>Категории не найдены</h1>;
  }

  return (
    <div>
      {data && (
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
      )}
    </div>
  );
};
