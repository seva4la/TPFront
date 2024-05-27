import { useState } from "react";
import { MyButton } from "../../button/MyButton";
import { useUpdateTask } from "../../../hooks/useUpdateTask";
import "./UpdateTask.css";

export const UpdateTask = ({ setVisisble, trigger, data, id }) => {
  const task = data.find((task) => task.id === id);

  const [catTitle, setCatTitle] = useState(task.title);
  const [catDescription, setCatDescription] = useState(task.description);

  const handleUpdate = useUpdateTask();

  return (
    <div className="wintaskup">
      <h3 className="crtaskup">Редактирование задачи</h3>
      <input className ="enttup"
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        type="text"
        placeholder="Название задачи"
      />
      <input className="entdescup"
        value={catDescription}
        onChange={(e) => setCatDescription(e.target.value)}
        type="text"
        placeholder="Описание задачи"
      />
      <MyButton className ="createtaskup"
        onClick={() => {
          handleUpdate({
            task_id: id,
            trigger,
            title: catTitle,
            description: catDescription,
          });
          setVisisble(false);
          trigger();
        }}
      >
        Обновить
      </MyButton>
      <MyButton className ="canceltup"
        onClick={() => {
          setVisisble(false);
        }}
      >
        Отменить
      </MyButton>
    </div>
  );
};
