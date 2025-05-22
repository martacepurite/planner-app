import { useState } from "react";


function App() {
  const [index, setIndex] = useState(2);
  const [tasks, setTasks] = useState([
    { id: 1, title: "do stuff", due_date: "", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: index, title: newTask, due_date: "", completed: false },
    ]);
    setIndex(index + 1);
    setNewTask("");
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

  const listItems = tasks.map((task) => (
    <div
      key={task.id}
      className="flex flex-row p-2 m-2 bg-slate-200 rounded-full"
    >
      {task.completed && (
        <div className="flex">
          <div className="flex grow w-56 ml-4 mt-1 line-through">
            {task.title}
          </div>
          <button
            className="text-red-700 p-1 mr-4 cursor-pointer hover:scale-110"
            onClick={(e) => handleRemoveTask(task.id)}
          >
            X
          </button>
        </div>
      )}
      {!task.completed && (
        <div className="flex flex-row">
          <div className="flex w-56 grow ml-4 mt-1">{task.title}</div>
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
      )}
    </div>
  ));

  return (
    <>
      <div className=" flex flex-col items-center ">
        <div className="flex flex-col bg-slate-400 shadow-md/20 rounded-2xl p-2 m-2">
        <div className="pl-4 p-2 font-light text-white text-xl">My Tasks</div>
          {listItems}
        </div>
        <form className="flex flex-row justify-center" onSubmit={handleAddTask}>
          <label >
            New task:{" "}
            <input
              className="border-2 p-2 border-slate-400 shadow-md/10 rounded-full pl-3"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          <button
            className="p-2 m-2 text-shadow-black text-shadow-md/10 text-3xl hover:scale-105 font-bold cursor-pointer"
            type="submit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

          </button>
          </label>
        </form>
      </div>
    </>
  );
}

export default App;
