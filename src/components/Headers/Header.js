import React, { useState, useEffect } from 'react';
import { Layout, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, DownOutlined ,LogoutOutlined} from '@ant-design/icons';
import './Header.css'
import { auth,firestore } from '../../firebase';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
const { Header } = Layout;




const HeaderComponent = ({ currentUser  }) => {


  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
 
  useEffect(() => {
    if (currentUser && currentUser.displayName) {
      setUserData(currentUser.displayName);
    }
  }, [currentUser]);

  const handleLogout = async () => {
    console.log('Attempting to log out...');
    try {
      await auth.signOut();
      console.log('User logged out successfully.');
    
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };


  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <UserOutlined />
        My Profile
      </Menu.Item>
      <Menu.Item key="logout" onClick={() => handleLogout()}>
        <LogoutOutlined />
        Logout
      </Menu.Item>
    </Menu>
  );
  
  const colorBgContainer = '#38323d';
  return (
    <Layout >
      <Header className='headerrr' style={{ paddingBottom: '15px 0px ', display: 'flex', justifyContent: "space-between", backgroundColor: colorBgContainer }}>
        <div>
          <h1 style={{ color: 'white', paddingBottom: '20px' }}>Go Freight</h1>
        </div>
        <div style={{ padding: '20px 0 0 0' }}>
          {/* Ant Design Dropdown */}
          <Dropdown overlay={userMenu} style={{ color: 'white' }}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} style={{ color: 'white' }}>
              <UserOutlined style={{ fontSize: '18px', marginRight: '5px' }} />
              {userData ? userData:'user'}<DownOutlined style={{ fontSize: '12px' }} />
            </a>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
