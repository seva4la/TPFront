/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { MyModal } from "./components/MyModal/MyModal";
import { MyButton } from "./components/button/MyButton";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div>
        <h1>TODOLIST</h1>
        <div>
          <h2>Категории</h2>
          <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
            Создать категорию
          </MyButton>
          <MyModal visible={modal} setVisisble={setModal}>
            <form action="">
              <input type="text" />
            </form>
          </MyModal>
        </div>
        <div>
          <h2>Задачи</h2>
        </div>
      </div>
    </>
  );
}

export default App;
