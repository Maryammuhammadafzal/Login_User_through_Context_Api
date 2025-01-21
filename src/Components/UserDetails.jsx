import { useContext } from 'react';
import { GlobalContext } from '../Context/context';

function UserDetails() {
  const { state, dispatch } = useContext(GlobalContext);

  function handleLogout() {
    dispatch({
      type: "USER_LOGOUT",
      payload: null
    });
  }

  return (
    <div className="p-4 w-fit h-fit gap-5  bg-neutral-200 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">User Details</h2>
      {state.user ? (
        <div className=' w-64 h-56'>
          <p className="text-gray-700 p-3">Name: <span className="font-semibold">{state.user.userName}</span></p>
          <p className="text-gray-700 p-3">Email: <span className="font-semibold">{state.user.email}</span></p>
          <p className="text-gray-700 p-3">Subject: <span className="font-semibold">{state.user.subject}</span></p>
          <button onClick={handleLogout} className="mt-4 p-2 mx-3 bg-blue-500 text-white rounded">Logout</button>
          <button onClick={handleLogout} className="mt-4 p-2 m-3 bg-blue-500 text-white rounded">Login</button>
        </div>
      ) : (
        <p className="text-gray-500">No user information available.</p>
      )}
    </div>
  );
}

export default UserDetails;
