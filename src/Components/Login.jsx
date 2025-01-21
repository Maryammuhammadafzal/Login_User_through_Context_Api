import { GlobalContext } from '../Context/context';
import { useContext, useRef } from "react";

function Login() {
  let { state, dispatch } = useContext(GlobalContext);
  console.log(state);

  let userNameRef = useRef(null);
  let userEmailRef = useRef(null);
  let userSubRef = useRef(null);

  function logout() {
    dispatch({
      type: "USER_LOGOUT",
      payload: null
    });
  }

  function login() { 
    let userName = userNameRef.current.value;       
    let userEmail = userEmailRef.current.value;       
    let userSubject = userSubRef.current.value;       
    dispatch({
      type: "USER_LOGIN",
      payload: {
        userName: userName,
        email: userEmail,
        subject: userSubject
      }
    });
  }

  function toggleTheme() {
    dispatch({
      type: "TOGGLE_THEME"
    });
  }

  return (
    <div className='w-[22rem] h-fit flex flex-col justify-center items-center rounded-md bg-neutral-200 shadow-md gap-3'>
      <h1 className='text-3xl text-zinc-900 font-bold mb-3 mt-3'>Login</h1>
      <form >
        <label htmlFor="username" className='text-xl font-semibold p-3 my-3'>username:<br/> <input className='rounded-md bg-neutral-100 px-3 text-base font-medium  ml-5 mt-2 border-neutral-500 border border-2' id="username" type="text" ref={userNameRef}/></label> <br />
        <label htmlFor="useremail" className='text-xl font-semibold p-3 my-3'>email: <br/> <input className='rounded-md bg-neutral-100 px-3 text-base font-medium ml-5 mt-2 border-neutral-500 border border-2' id="useremail" type="email" ref={userEmailRef}/></label> <br />
        <label htmlFor="usersub" className='text-xl font-semibold p-3 my-3'>subject: <br/> <input className='rounded-md bg-neutral-100 px-3 text-base font-medium ml-5 mt-2 border-neutral-500 border border-2' id="usersub" type="text" ref={userSubRef}/></label> <br />
      </form>
      <br />
     <div> 
     <button onClick={logout}  className="mt-4 w-20 p-2 mx-3 bg-blue-500 text-white rounded">Logout</button>
      <button onClick={login}  className="mt-4 w-20 p-2 mx-3 bg-blue-500 text-white rounded">Login</button>
     </div>
      <br />
      
      {/* Display user information if available */}
      {state.user && (
        <div>
          <h2>User Information:</h2>
          <p>Name: {state.user.userName}</p>
          <p>Email: {state.user.email}</p>
          <p>Subject: {state.user.subject}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
