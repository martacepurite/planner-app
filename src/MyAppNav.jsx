import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav className="flex flex-row bg-slate-300 gap-7 p-5 text-2xl shadow-md/40 items-center justify-center">
      <NavLink className={({ isActive }) =>
    isActive ? "border-1 p-2 rounded-full" : "text-black hover:scale-110 p-2"
  } to="planner-app/home" end>
        Home
      </NavLink>
      <NavLink className={({ isActive }) =>
    isActive ? "border-1 p-2 rounded-full" : "text-black hover:scale-110 p-2"
  } to="planner-app/tasks" end>
        My Tasks 
      </NavLink>
      <NavLink className={({ isActive }) =>
    isActive ? "border-1 p-2 rounded-full" : "text-black hover:scale-110 p-2"
  } to="planner-app/habits" end>
        My Habits 
      </NavLink>
      <NavLink className={({ isActive }) =>
    isActive ? "border-1 p-2 rounded-full" : "text-black hover:scale-110 p-2"
    } to="planner-app/login" end>
       Login 
      </NavLink>
      <NavLink className={({ isActive }) =>
    isActive ? "border-1 p-2 rounded-full" : "text-black hover:scale-110 p-2"
  } to="planner-app/register" end>
      Register 
      </NavLink>
    </nav>
  );
}