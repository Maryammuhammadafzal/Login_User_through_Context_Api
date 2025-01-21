import { useContext } from 'react';
import { GlobalContext } from './Context/context';
import Login from './Components/Login';
import UserDetails from './Components/UserDetails';

function App() {
  const { state } = useContext(GlobalContext);

  return (
    <div className="w-full h-screen flex justify-center items-center gap-2">
      {state.user ? <UserDetails /> : <Login />}
    </div>
  );
}

export default App;
