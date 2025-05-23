import { useState } from "react";
import axios from "axios";


function Register() {

  const [newId, setNewId] = useState(6);
  const [newFirstName, setNewFirstName] = useState("");

  const addUser = (e) => {
  const userData = {
    id: newId.value,
    name: newFirstName.value
  };

  axios.post(`http://localhost:3000/add`, userData).then((response) => {
      console.log(response);
    });
}

  const registerUser = (e) => {
    e.preventDefault();
    addUser();
    setNewId(newId + 1);
  }

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={registerUser} className=" shadow-md/40 flex flex-col gap-4 p-5 m-5 bg-slate-300 rounded-2xl items-end ">
          <label className="flex flex-row items-end" for="fname">
            First name:
            <input className="ml-5 p-1 border-b-1" value={newFirstName} onChange={(e)=> setNewFirstName(e.target.value)} type="text" id="fname" name="fname"></input>
          </label>
          <label className="flex flex-row items-end" for="lname">
            Last name:
            <input className="ml-5 p-1 border-b-1" type="text" id="lname" name="lname"></input>
          </label>
          <label className="flex flex-row items-end" for="lname">
            Username:
            <input className="ml-5 p-1 border-b-1" type="text" id="lname" name="lname"></input>
          </label>
          <label className="flex flex-row items-end" for="lname">
            Password:
            <input className="ml-5 p-1 border-b-1" type="text" id="lname" name="lname"></input>
          </label>
          <label className="flex flex-row items-end" for="lname">
            Repeat <br /> Password:
            <input className="ml-5 p-1 border-b-1" type="text" id="lname" name="lname"></input>
          </label>
          <button className="p-2 m-1 pl-3 pr-3 hover:scale-105 cursor-pointer rounded-full shadow-md/20 bg-teal-400 font-bold">Sign up</button>
        </form>
      </div>
    </>
  );
}

export default Register;
