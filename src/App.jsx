import { useState } from "react";
import axios from "axios";

const apiCall = () => {
  axios.get("http://localhost:3000").then((data) => {
    //this console.log will be in our frontend console
    console.log(data);
  });
};
function App() {
  const [index, setIndex] = useState(2);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "do stuff",
      due_date: new Date("01.01.2027"),
      priority: "low",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newTaskDue, setNewTaskDue] = useState(new Date("01.01.2027"));
  const [newTaskPriority, setNewTaskPriority] = useState("Low");
  const [isEditingID, setIsEditingID] = useState();
  const [editTitle, setEditTitle] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editPriority, setEditPriority] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: index,
        title: newTask,
        due_date: new Date(newTaskDue),
        priority: newTaskPriority,
        completed: false,
      },
    ]);
    setIndex(index + 1);
    setNewTask("");
    setNewTaskDue("");
    setNewTaskPriority("");
  }

  function handleRemoveTask(remove_id) {
    setTasks(tasks.filter((a) => a.id != remove_id));
  }

  function handleTaskDone(done_id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === done_id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  }

  function handleEditTask(edit_id, edit_title, edit_time, edit_priority) {
    setIsEditingID(edit_id);
    setEditTitle(edit_title);
    setEditTime(edit_time);
    setEditPriority(edit_priority);
  }

  function handleEditTaskDone(edit_id) {
    setIsEditingID("");
    setTasks(
      tasks.map((task) => {
        if (task.id === edit_id) {
          return {
            ...task,
            title: editTitle,
            due_date: new Date(editTime),
            priority: editPriority,
          };
        } else {
          return task;
        }
      })
    );
  }
  const listItems = tasks.map((task) => (
    <div
      key={task.id}
      className="flex flex-col w-md p-2 m-2 bg-slate-200 rounded-full"
    >
      {task.priority === "high" && (
        <div className="text-red-700 flex self-end mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      )}
      {task.priority === "med" && (
        <div className="text-amber-600 flex self-end mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      )}

      {task.completed && (
        <div className="flex flex-row">
          <div className="flex grow ml-4 mt-1 line-through">{task.title}</div>
          <button
            className="flex text-red-700 p-1 mr-4 cursor-pointer hover:scale-110"
            onClick={(e) => handleRemoveTask(task.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      {!task.completed && (
        <div className="flex flex-col">
          {task.id === isEditingID && (
            <div>
              <input
                className="flex grow ml-4  border-b-1 "
                autoFocus={true}
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <div className="flex flex-row gap-1">
                <input
                  type="datetime-local"
                  className="p-1 rounded-full pl-3"
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                />
                <select
                  name="priority"
                  className="border-1 p-1 border-slate-400 rounded-full pl-3"
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="med">Medium</option>
                  <option value="high">High</option>
                </select>
                <button
                  className="p-1 flex cursor-pointer mr-7 ml-2 hover:scale-110"
                  onClick={(e) => handleEditTaskDone(task.id)}
                >
                  Done
                </button>
              </div>
            </div>
          )}
          {task.id != isEditingID && (
            <div className="flex flex-col grow">
              <div className="flex grow">
                <div className="flex grow ml-4 mt-1 text-gray-700">
                  {task.title}
                </div>
                <button
                  className="p-1 cursor-pointer hover:scale-110"
                  onClick={(e) =>
                    handleEditTask(
                      task.id,
                      task.title,
                      task.due_date,
                      task.priority
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
                <button
                  className="text-green-700 p-1 cursor-pointer hover:scale-110"
                  onClick={(e) => handleTaskDone(task.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex self-end mr-7">
                <div>{task.due_date.getDate()}.</div>
                <div>{task.due_date.getMonth() + 1}.</div>
                <div className="pr-4">{task.due_date.getFullYear()}</div>
                <div>{task.due_date.getHours()}:</div>
                <div>{task.due_date.getMinutes()}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  ));

  return (
    <>
      <div className="flex flex-row gap-4 items-center justify-center p-5">
        <button onClick={apiCall}>Make API Call</button>
        <div className=" flex flex-col items-center ">
          <div className="flex flex-col bg-slate-400 shadow-md/20 rounded-2xl p-2 m-2">
            <div className="pl-4 p-2 font-light text-white text-xl">
              My Tasks
            </div>
            {listItems}
          </div>
          <form
            className="flex flex-col gap-2 justify-center items-end"
            onSubmit={handleAddTask}
          >
            <label>
              New task:{" "}
              <input
                className="border-2 p-2 border-slate-400 shadow-md/10 rounded-full pl-3"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </label>
            <label>
              Due date:{" "}
              <input
                type="datetime-local"
                className="border-2 p-2 border-slate-400 shadow-md/10 rounded-full pl-3"
                value={newTaskDue}
                onChange={(e) => setNewTaskDue(e.target.value)}
              />
            </label>
            <label>
              Priority:{" "}
              <select
                name="priority"
                className="border-2 p-2 border-slate-400 shadow-md/10 rounded-full pl-3"
                value={newTaskPriority}
                onChange={(e) => setNewTaskPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="med">Medium</option>
                <option value="high">High</option>
              </select>
            </label>

            <button
              className="p-2 m-2 text-shadow-black text-shadow-md/10 text-3xl hover:scale-105 font-bold cursor-pointer"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
