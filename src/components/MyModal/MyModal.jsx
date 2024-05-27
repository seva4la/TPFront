/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import cl from "./MyModal.module.css";
export const MyModal = ({ children, visible, setVisisble }) => {
  return (
    <div className={`${cl.Modal}`}>
      <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
        {/* <button onClick={() => setVisisble(false)}>Отмена</button> */}
        {children}
      </div>
    </div>
  );
};
