/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { MyModal } from "./components/MyModal/MyModal";
import { MyButton } from "./components/button/MyButton";
import { CategoryList } from "./components/CategoryList";
import { TextSize } from "tabler-icons-react";



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
    setPost({ title: "" });
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  return (
    <>
      <div class="background">
        <MyButton class = "user" style={{ marginTop: 10}} onClick={() => setModal(true)}>
          user
          </MyButton>
        <h1 class="header">TODOLIST</h1>
        <div class="pryam1">
          <h2 class ="categ">Категории</h2>
          <MyButton class = "fontbutcat" style={{ marginTop: -50}} onClick={() => setModal(true)}>
           {/* <span style='fontbutcat'> + Создать категорию</span> */}
           + Создать категорию
          </MyButton>
          <MyModal visible={modal} setVisisble={setModal} title = 'Заголовок'>
            
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
        <div class="pryam2">
          <h2 class = "zadachi">Список задач</h2>
          <MyButton class = "fontbutzad" style={{ marginTop: -50}} onClick={() => setModal(true)}>
           {/* <span style='fontbutcat'> + Создать категорию</span> */}
           + Создать задачу
          </MyButton>
        </div>
      </div>
    </>
  );
}

export default App;
