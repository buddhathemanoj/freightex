import { BrowserRouter as Router ,Route, BrowserRouter, Routes,Navigate} from "react-router-dom";
import './App.css';
import 'antd/dist/antd'


import { Signup } from './components/auth/Signup';
import { Login } from "./components/auth/Login";
import { Home } from "./components/pages/Home";
import { useAuth } from "./firebase";
import Sidebar from "./components/pages/Sidebar";
function App() {
  const currentUser = useAuth();
  console.log( 'current: user',currentUser )
  console.log('Current user:', currentUser ? currentUser.displayName || currentUser.email : 'No user logged in');

  return (
    <BrowserRouter>
   <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={currentUser && currentUser.emailVerified ?<> <Sidebar/></> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
