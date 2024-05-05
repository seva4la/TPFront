/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.css";
import { MyModal } from "./components/MyModal/MyModal";
import { MyButton } from "./components/button/MyButton";
import { CategoryList } from "./components/CategoryList";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useAddCategories } from "./hooks/useAddCategories";

function App() {
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({ title: "" });

  const handleAddCategory = useAddCategories(post.title);

  const posts = useSelector((state) => state.category);
  console.log(posts);
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
            <form>
              <input
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Name"
              />

              <MyButton onClick={handleAddCategory}>Add post</MyButton>
            </form>
          </MyModal>
          <CategoryList posts={posts} />
        </div>
        <div>
          <h2>Задачи</h2>
          <progress id="file" max="100" value="70">
            70%
          </progress>
        </div>
      </div>
    </>
  );
}

export default App;
