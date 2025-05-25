import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav className="flex flex-row bg-slate-300 gap-5 p-5 text-2xl shadow-md/40 ">
      <NavLink className="hover:scale-110" to="planner-app/home" end>
        Home
      </NavLink>
      <NavLink className="hover:scale-110" to="planner-app/tasks" end>
        My Tasks 
      </NavLink>
      <NavLink className="hover:scale-110" to="planner-app/habits" end>
        My Habits 
      </NavLink>
      <NavLink className="hover:scale-110" to="planner-app/login" end>
       Login 
      </NavLink>
      <NavLink className="hover:scale-110" to="planner-app/register" end>
      Register 
      </NavLink>
    </nav>
  );
}