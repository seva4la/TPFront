import { MyModal } from "../../MyModal/MyModal";
import { MyButton } from "../../button/MyButton";
import { CategoryList } from "../../CategoryList";
import { useSelector } from "react-redux";
import { useState } from "react";
//import { useAddCategories } from "../../../hooks/useAddCategories";
import "./MainPage.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AddCategory } from "./AddCategory";
import { useLazyAxios } from "use-axios-client";
import { api } from "../../../Const/const";
import { TasksList } from "../../TasksList";
import { AddTask } from "./AddTask";

export function MainPage() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [modalTasks, setModalTasks] = useState(false);
  const [catIdForTAsk, setCatIdForTAsk] = useState();

  const handleAddTask = "";

  //

  const token = Cookies.get("userToken");
  const isUserAuthorised = token && token.length > 0 ? true : false;

  const [trigger, { data, loading: isLoading }] = useLazyAxios({
    url: `${api}/categories/get`,
  });
  const [triggerTasks, { data: tasks }] = useLazyAxios({
    url: `${api}/tasks/get_with_id?user_id=${token}`,
  });
  console.log(tasks);
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
      {modalTasks && (
        <MyModal visible={modalTasks} setVisisble={setModalTasks}>
          <AddTask
            setVisisble={setModalTasks}
            trigger={triggerTasks}
            isLoading={isLoading}
            categories={data}
          />
        </MyModal>
      )}
      <div className="background">
        <h1 className="header">
          TODOLIST
          {!isUserAuthorised && (
            <>
              <button className="authb" onClick={() => navigate("/sign-in")}>
                Авторизация
              </button>
              <button className="authb" onClick={() => navigate("/sign-up")}>
                Регистрация
              </button>
              <div>Войдите в аккаунт</div>
            </>
          )}
          {isUserAuthorised && (
            <>
              <button
                className="authb"
                onClick={() => {
                  Cookies.remove("userToken");
                  navigate("/");
                }}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </h1>

        <div className="pryam1">
          <h2 className="categ">Категории</h2>
          <MyButton
            className="fontbutcat"
            style={{ marginTop: -50 }}
            onClick={() => setModal(true)}
          >
            + Создать категорию
          </MyButton>

          <CategoryList
            data={data}
            trigger={trigger}
            token={token}
            setCatIdForTAsk={setCatIdForTAsk}
          />
        </div>
        <div className="pryam2">
          <h2 className="zadachi">Список задач</h2>
          <MyButton
            className="fontbutzad"
            style={{ marginTop: -50 }}
            onClick={() => setModalTasks(true)}
          >
            + Создать задачу
          </MyButton>

          <TasksList data={tasks} trigger={triggerTasks} token={token} />
        </div>
      </div>
    </>
  );
}
