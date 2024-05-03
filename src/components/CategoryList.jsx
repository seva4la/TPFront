/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CategoryItem } from "./CategoryItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../store/category/category.slice";

export const CategoryList = ({ posts }) => {
  const dispatch = useDispatch();
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Категории не найдены</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post, index) => (
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
