/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CategoryItem } from "./CategoryItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const CategoryList = ({ posts }) => {
  if (!posts.length) {
    // return <h1 style={{ textAlign: "center" }}>Категории не найдены</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <CategoryItem number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
