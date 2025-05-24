import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav className="flex flex-row bg-slate-300 gap-5 p-5 text-2xl shadow-md/40 ">
      <NavLink className="hover:scale-110" to="/" end>
        Home
      </NavLink>
      <NavLink className="hover:scale-110" to="/tasks" end>
        My Tasks 
      </NavLink>
      <NavLink className="hover:scale-110" to="/habits" end>
        My Habits 
      </NavLink>
      <NavLink className="hover:scale-110" to="/login" end>
       Login 
      </NavLink>
      <NavLink className="hover:scale-110" to="/register" end>
      Register 
      </NavLink>
    </nav>
  );
}