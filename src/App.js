import { BrowserRouter as Router ,Route, BrowserRouter, Routes,Navigate} from "react-router-dom";
import './App.css';
import 'antd/dist/antd'
import { Layout, Row, Col } from 'antd';

import { Signup } from './components/auth/Signup';
import { Login } from "./components/auth/Login";
import Sidebarr from "./components/pages/Home";
import { useAuth } from "./firebase";

import { Newshipment } from "./components/Ocean import/Newshipment";
import HeaderComponent from "./components/Headers/Header";
import Shipmentlist from "./components/Ocean import/Shipemntlist";
const { Content } = Layout;
function App() {
  const currentUser = useAuth();
  console.log( 'current: user',currentUser )
  console.log('Current user:', currentUser ? currentUser.displayName || currentUser.email : 'No user logged in');

  return (
    <BrowserRouter>
   <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homeee" element={<Sidebarr/>} />
     
      <Route path="/ocean-import/new-shipment" element={<><HeaderComponent/> <Layout>

      <Row>
        <Col span={3}>
          <Sidebarr />
        </Col>
       <Col span={21}>
          <Content style={{paddingTop:'20px'}} >
          
            <Newshipment />
          </Content>
     </Col>
      </Row>
    </Layout></>} />
    <Route path="/ocean-import/shipment-list"  element={currentUser && currentUser.emailVerified ? <><HeaderComponent/> <Layout>
      <Row>
        <Col span={3}>
          <Sidebarr />
        </Col>
       <Col span={21} >
          <Content style={{paddingTop:'20px'}} >
          
            < Shipmentlist/>
          </Content>
     </Col>
      </Row>
    </Layout></>: <Navigate to="/login" />}/>
  



      <Route
        path="/home"
        element={currentUser && currentUser.emailVerified ?<> <HeaderComponent/><Sidebarr/></> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
