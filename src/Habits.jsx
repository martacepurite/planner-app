import { useState } from "react";

function Habits() {
  const [habits, setHabits] = useState([
    { id: 1, title: "exercise", day_ids: [2, 3], done: false, streak: 2 },
    { id: 2, title: "walk", day_ids: [1, 3], done: false, streak: 1 },
    { id: 3, title: "read", day_ids: [2], done: false, streak: 1 },
    { id: 4, title: "clean", day_ids: [1, 2, 3], done: false, streak: 3 },
    { id: 5, title: "study", day_ids: [3], done: false, streak: 1 },
    { id: 6, title: "meditate", day_ids: [1, 2], done: false, streak: 2 },
  ]);

  const [streaks, setStreaks] = useState([
    { id: 1, date: new Date(1735945920000), habits_id: [1, 2, 4, 6] },
    { id: 2, date: new Date(1735946920000), habits_id: [2, 3, 4, 6] },
    { id: 3, date: new Date(1735947920000), habits_id: [1, 5, 4] },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date(Date.now()));
  const [currentStreaksID, setCurrentStreaksID] = useState(4);
  const [currentHabitsID, setCurrentHabitsID] = useState(7);

  function handleDayDone(e) {
    e.preventDefault();

    const doneHabitsIds = habits
      .filter((hab) => hab.done === true)
      .map((h) => h.id);

    setHabits(
      habits.map((task) => {
        if (task.done === true) {
          return {
            ...task,
            streak: task.streak + 1,
            day_ids: [...task.day_ids, currentStreaksID],
          };
        } else {
          return {
            ...task,
            streak: 0,
          };
        }
      })
    );

    setStreaks([
      ...streaks,
      {
        id: currentStreaksID,
        date: currentDate,
        habits_id: doneHabitsIds,
      },
    ]);

    setCurrentStreaksID(currentStreaksID + 1);
    setCurrentDate(new Date(currentDate.valueOf() + 86400000));
  }

  function handleChangeCheck(id) {
    setHabits(
      habits.map((hab) => {
        if (hab.id === id) {
          return { ...hab, done: !hab.done };
        } else {
          return hab;
        }
      })
    );
  }

  const [newHabitTitle, setNewHabitTitle] = useState("");

  function handleAddHabit(e) {
    e.preventDefault();

    setHabits([
      ...habits,
      {
        id: currentHabitsID,
        title: newHabitTitle,
        day_ids: [],
        done: false,
        streak: 0,
      },
    ]);

    setCurrentHabitsID(currentHabitsID + 1);
  }


  const streaktrack = (
    <div className="flex flex-col gap-2 bg-slate-200 p-5 rounded-2xl shadow-md/20">
      <div className="font-light flex self-center">

      Streaks
      </div>
      {habits.map((hab) => (
        <div key={hab.id} className="flex flex-row items-start pl-2 pr-2">
            <p className="flex grow pr-4">{hab.title}</p>
            {hab.streak > 0 && (
              <div>
            <p className="flex text-green-600">{hab.streak}</p>
              </div>
            )}
            {hab.streak <= 0 && (
              <div>
            <p className="flex text-red-700">{hab.streak}</p>
              </div>
            )}
        </div>
      ))}
    </div>
  );

  const addhabit = (
    <form
      onSubmit={handleAddHabit}
      className="flex flex-row gap-2 bg-slate-200 p-5 rounded-2xl shadow-md/20"
    >
      <label>
        <p className="pb-2 pl-2">New Habit:</p>
        <input
          className="bg-slate-100 p-3 pl-5 rounded-full flex"
          type="text"
          value={newHabitTitle}
          onChange={(e) => setNewHabitTitle(e.target.value)}
        ></input>
      </label>
      <input
        className=" p-2 bg-green-300 rounded-full flex hover:scale-110 shadow-md/10 cursor-pointer"
        type="submit"
        value="Add new"
      />
    </form>
  );

  const today = (
    <form
      onSubmit={handleDayDone}
      className="flex flex-col bg-slate-200 p-5 rounded-2xl shadow-md/20"
    >
      <div className="font-light p-2">
        {currentDate.toDateString()}
      </div>
      {habits.map((hab) => (
        <div key={hab.id} className="flex flex-row pl-2 pr-2">
          <label className="flex grow pr-2 cursor-pointer">
            <p className="flex grow pr-2">{hab.title}</p>
            <input
              type="checkbox"
              className="flex cursor-pointer"
              value={hab.title}
              checked={hab.done}
              onChange={() => handleChangeCheck(hab.id)}
              name={hab.title}
              id={hab.id}
            ></input>
          </label>
        </div>
      ))}
      <input
        className="mt-2 p-2 bg-green-300 rounded-full hover:scale-110 shadow-md/10 cursor-pointer"
        type="submit"
        value="Done"
      />
    </form>
  );

  return (
    <>
      <div className="flex items-center justify-center gap-4 p-5">
        {streaktrack}
        <div className="flex items-end bg-slate-200 p-5 m-2 pt-10 shadow-md/20 rounded-2xl">
          <div className="flex flex-row items-end">
            <div className="flex flex-col pr-4">
              {habits.map((hab) => (
                <div key={hab.id}>
                  <div>{hab.title}</div>
                </div>
              ))}
            </div>
            {streaks.map((day) => (
              <div key={day.id}>
                <div className="flex flex-col grow items-center">
                  <div className="flex border-1 p-1 -rotate-90 mb-8 rounded-full pr-2 pl-2">
                    <div className="flex">{day.date.getDate()}.</div>
                    <div className="flex">{day.date.getMonth() + 1}.</div>
                    <div className="flex">{day.date.getFullYear()}</div>
                  </div>
                  {habits.map((h) => (
                    <div key={h.id}>
                      {h.day_ids.includes(day.id) && (
                        <div className="text-green-600 font-bold">
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
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </div>
                      )}
                      {!h.day_ids.includes(day.id) && (
                        <div className="text-red-700 font-bold ">
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
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>{today}</div>
        <div>{addhabit}</div>
      </div>
    </>
  );
}

export default Habits;
