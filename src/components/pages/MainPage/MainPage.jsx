import { MyModal } from "../../MyModal/MyModal";
import { MyButton } from "../../button/MyButton";
import { CategoryList } from "../../CategoryList";
import { useSelector } from "react-redux";
import { useState } from "react";
//import { useAddCategories } from "../../../hooks/useAddCategories";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AddCategory } from "./AddCategory";
import { useLazyAxios } from "use-axios-client";

export function MainPage() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({ title: "" });

  const handleAddTask = "";

  const posts = useSelector((state) => state.category);
  //

  const token = Cookies.get("userToken");
  const isUserAuthorised = token && token.length > 0 ? true : false;

  const [trigger, { data, loading: isLoading }] = useLazyAxios({
    url: "http://127.0.0.1:8000/categories/get",
  });

  //   const handleCreate = (e) => {
  //     //e.preventDefault();
  //     setPost({ ...post, title: e.target.value });
  //     console.log(e.target.value);
  //     setCatTitle(e.target.value);
  //   };
  console.log(modal);
  return (
    <>
      {modal && (
        <MyModal visible={modal} setVisisble={setModal}>
          <AddCategory
            setVisisble={setModal}
            trigger={trigger}
            isLoading={isLoading}
          />
        </MyModal>
      )}
      <div>
        {!isUserAuthorised && (
          <>
            <button onClick={() => navigate("/sign-in")}>Авторизация</button>
            <button onClick={() => navigate("/sign-up")}>Регистрация</button>
            <div>Войдите в аккаунт</div>
          </>
        )}
        {isUserAuthorised && (
          <>
            <button
              onClick={() => {
                Cookies.remove("userToken");
                navigate("/");
              }}
            >
              Выйти из аккаунта
            </button>
          </>
        )}

        <h1>TODOLIST</h1>
        <div>
          <h2>Категории</h2>
          <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
            Создать категорию
          </MyButton>

          <CategoryList
            posts={posts}
            data={data}
            trigger={trigger}
            token={token}
          />
        </div>
        <div>
          <h2>Задачи</h2>
          <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
            Создать категорию
          </MyButton>
        </div>
      </div>
    </>
  );
}
