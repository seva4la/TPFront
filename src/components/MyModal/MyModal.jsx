/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { X } from "tabler-icons-react";
import React from "react";
import cl from "./MyModal.module.css";
export const MyModal = ({ children, visible, setVisisble }) => {
  return (
    <div className={`${cl.Modal} ${visible && cl.active}`}>
      <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setVisisble(false)}>
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};
