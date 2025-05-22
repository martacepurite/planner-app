function Login() {
  return (
    <>
      <div className="flex items-center justify-center">
        <form className=" shadow-md/40 flex flex-col gap-4 p-5 m-5 bg-slate-300 rounded-2xl items-end ">
          <label className="flex flex-row items-end" for="lname">
            Username:
            <input className="ml-5 p-1 border-b-1" type="text" id="lname" name="lname"></input>
          </label>
          <label className="flex flex-row items-end" for="lname">
            Password:
            <input className="ml-5 p-1 border-b-1" type="text" id="lname" name="lname"></input>
          </label>
          <button className="p-2 m-1 pl-3 pr-3 hover:scale-105 cursor-pointer rounded-full shadow-md/20 bg-teal-400 font-bold">Log in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
