import { BrowserRouter as Router ,Route, BrowserRouter, Routes,Navigate} from "react-router-dom";
import './App.css';
// import 'antd/dist/antd'
import { Layout, Row, Col } from 'antd';

import { Signup } from './components/auth/Signup';
import { Login } from "./components/auth/Login";
import Sidebarr from "./components/pages/Home";
import { useAuth } from "./firebase";

import { Newshipment } from "./components/Ocean import/Newshipment";
import HeaderComponent from "./components/Headers/Header";
import Shipmentlist from "./components/Ocean import/Shipemntlist";



import { Mainoverview } from "./components/Dashboard/Mainoverview";
import { MBLlist } from "./components/Ocean import/MBLlist";
import { HBLlist } from "./components/Ocean import/HBLlist";
import Sidebarrr from "./components/pages/Home";
import { Basic } from "./components/Ocean import/NewShipment/Basic";



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
     
      <Route path="/ocean-import/new-shipment" element={currentUser && currentUser.emailVerified ?( <div className="app-container">
        <HeaderComponent currentUser={currentUser} />
        <Layout>
          <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={3} className="sidebar-col">
              <Sidebarrr />
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={21} className="content-col">
              <Content style={{paddingTop:'80px'}} className="content-wrapper">
                <Newshipment />
              </Content>
            </Col>
          </Row>
        </Layout>
      </div>
    ) : (
      <Navigate to="/login" />)} />
    <Route path="/ocean-import/shipment-list"  element={currentUser && currentUser.emailVerified ?( <div className="app-container">
        <HeaderComponent currentUser={currentUser} />
        <Layout>
          <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={3} className="sidebar-col">
              <Sidebarrr />
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={21} className="content-col">
              <Content style={{paddingTop:'80px'}} className="content-wrapper">
                <Shipmentlist />
              </Content>
            </Col>
          </Row>
        </Layout>
      </div>
    ) : (
      <Navigate to="/login" />)} />
  
    <Route path="/ocean-import/MB_L-list" element={currentUser && currentUser.emailVerified ?( <div className="app-container">
        <HeaderComponent currentUser={currentUser} />
        <Layout>
          <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={3} className="sidebar-col">
              <Sidebarrr />
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={21} className="content-col">
              <Content style={{paddingTop:'80px'}} className="content-wrapper">
                <MBLlist />
              </Content>
            </Col>
          </Row>
        </Layout>
      </div>
    ) : (
      <Navigate to="/login" />)}/>

    <Route path="/ocean-import/HB_L-list"  element={currentUser && currentUser.emailVerified ?( <div className="app-container">
        <HeaderComponent currentUser={currentUser} />
        <Layout>
          <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={3} className="sidebar-col">
              <Sidebarrr />
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={21} className="content-col">
              <Content style={{paddingTop:'80px'}} className="content-wrapper">
                <HBLlist />
              </Content>
            </Col>
          </Row>
        </Layout>
      </div>
    ) : (
      <Navigate to="/login" />)}/>





      <Route
        path="/gofreight"
        element={currentUser && currentUser.emailVerified ?( <div className="app-container">
        <HeaderComponent currentUser={currentUser} />
        <Layout>
          <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={3} className="sidebar-col">
              <Sidebarrr />
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={21} className="content-col">
              <Content style={{paddingTop:'80px'}} className="content-wrapper">
                <Mainoverview />
              </Content>
            </Col>
          </Row>
        </Layout>
      </div>
    ) : (
      <Navigate to="/login" />)}
      />
      <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
