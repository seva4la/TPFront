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
    <div>
      <input
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={catDescription}
        onChange={(e) => setCatDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <MyButton
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
    </div>
  );
};
