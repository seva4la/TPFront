// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */

import React from "react";
import { TaskItem } from "./TaskItem";
import { useTasksGetWithId } from "../hooks/useTasksGetWithId";
import { useEffect } from "react";
import { useState } from "react";
import { MyModal } from "./MyModal/MyModal";
import { UpdateTask } from "./pages/MainPage/UpdateTask";

export const TasksList = ({ trigger, data, isLoading, token }) => {
  const [modalUpdateCat, setModalUpdateCat] = useState(false);
  const [catId, setCatId] = useState();

  const tasks = useTasksGetWithId({ trigger, data, isLoading, token });

  useEffect(() => {
    trigger();
  }, []);

  return (
    <div>
      <div>
        {data && (
          <>
            {tasks.map((post, index) => (
              <>
                <TaskItem
                  number={index + 1}
                  post={post}
                  trigger={trigger}
                  setCatId={setCatId}
                  setModalUpdateCat={setModalUpdateCat}
                />
              </>
            ))}
          </>
        )}
        {modalUpdateCat && (
          <MyModal visible={modalUpdateCat} setVisisble={setModalUpdateCat}>
            <UpdateTask
              id={catId}
              setVisisble={setModalUpdateCat}
              trigger={trigger}
              data={data}
              isLoading={isLoading}
            />
          </MyModal>
        )}
      </div>
    </div>
  );
};

// export const CategoryList = ({ posts, trigger, data, isLoading, token }) => {
//   const [modalUpdateCat, setModalUpdateCat] = useState(false);
//   const [catId, setCatId] = useState();

//   //const categories = useTasksGetWithId({ trigger, data, isLoading, token });

//   if (!categories || categories.length === 0) {
//     return <h2 style={{ textAlign: "center" }}>Категории не найдены</h2>;
//   }

//   return (
//     <div>
//       {data && (
//         <>
//           {categories.map((post, index) => (
//             <>
//               <CategoryItem
//                 number={index + 1}
//                 post={post}
//                 trigger={trigger}
//                 setCatId={setCatId}
//                 setModalUpdateCat={setModalUpdateCat}
//               />
//             </>
//           ))}
//         </>
//       )}
//       {modalUpdateCat && (
//         <MyModal visible={modalUpdateCat} setVisisble={setModalUpdateCat}>
//           <UpdateCat
//             id={catId}
//             setVisisble={setModalUpdateCat}
//             trigger={trigger}
//             isLoading={isLoading}
//           />
//         </MyModal>
//       )}
//     </div>
//   );
// };
