import { useState } from "react";

function Habits() {
  const [habits, setHabits] = useState([
    { id: 1, title: "exercise", day_ids: [1, 3] },
    { id: 2, title: "walk", day_ids: [1, 3] },
    { id: 3, title: "read", day_ids: [2] },
    { id: 4, title: "clean", day_ids: [1, 2, 3] },
    { id: 5, title: "study", day_ids: [3] },
    { id: 6, title: "meditate", day_ids: [1, 2] },
  ]);

  const [streaks, setStreaks] = useState([
    { id: 1, date: new Date("01.01.2025"), habits_id: [1, 2, 4, 6] },
    { id: 2, date: new Date("02.01.2025"), habits_id: [2, 3, 4, 6] },
    { id: 3, date: new Date("03.01.2025"), habits_id: [1, 5, 4] },
  ]);

  const renderhabits = habits.map((hab) => (
    <div key={hab.id}>
      <div>{hab.title}</div>
    </div>
  ));

  const items = streaks.map((day) => (
    <div
      key={day.id}
    >
      <div className="flex flex-col">
        <div className="flex flex-col border-2 p-1">
          <div className="flex">{day.date.getDate()}.</div>
          <div className="flex">{day.date.getMonth() + 1}.</div>
          <div className="flex pr-4">{day.date.getFullYear()}</div>
        </div>
        <div className="flex flex-col">
          {habits.map((h) => (
            <div>
              {h.day_ids.includes(day.id) && <div className="text-green-600 font-bold">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
 
                </div>}
              {!h.day_ids.includes(day.id) && (
                <div className="text-red-700 font-bold ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="flex flex-row items-end justify-center border-2">
        <div className="flex flex-col">

        {renderhabits}
        </div>
        <div className="flex flex-row">

        {items}
        </div>
      </div>
    </>
  );
}

export default Habits;
