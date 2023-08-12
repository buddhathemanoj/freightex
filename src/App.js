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
  console.log( 'current: user',currentUser)

  return (
    <BrowserRouter>
   <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={currentUser ?<> <Sidebar/></> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Signup/>
    //   <Login/>
    //   <Home/>
    // </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
// import { Signup } from './components/auth/Signup';
// import { Login } from './components/auth/Login';
// import { Home } from './components/pages/Home';
// import { useAuth } from './firebase';
// import { Routesmain } from './components/auth/Routesmain';


// function App() {
//   return (
//     <div>
    
    
//     <Routesmain/>
 
//   </div>
//   );
// }

// export default App;
