/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { MyModal } from "./components/MyModal/MyModal";
import { MyButton } from "./components/button/MyButton";
import { CategoryList } from "./components/CategoryList";

function App() {
  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({ title: "", body: "" });
  const [posts, setPosts] = useState([]);
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    //setPost({ title: "" });
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
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

              <MyButton onClick={addNewPost}>Add post</MyButton>
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
