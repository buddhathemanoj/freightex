import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import {
  UserOutlined,
  DownOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const { Header, Content, Footer, Sider } = Layout;

const colorBgContainer = '#38323d';
const colorBgContainer1 = '#38323d';

const userMenu = (
  <Menu>
    <Menu.Item key="profile">
      <UserOutlined />
    My Profile
    </Menu.Item>
  
    <Menu.Item key="logout">
      <LogoutOutlined />
      Logout
    </Menu.Item>
  </Menu>
);
const Sidebarrr = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    
    <Layout>
      <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={handleMenuCollapse}
      style={{ backgroundColor: colorBgContainer1, color: 'white', minHeight: '100vh' }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        style={{ backgroundColor: colorBgContainer1, color: 'white' }}
        mode="inline"
        defaultSelectedKeys={['/ocean-import']}
        defaultOpenKeys={['sub-ocean-import', 'sub-trade-partner']}
      >
         <Menu.Item key="/gofreight" icon={<UserOutlined />}>
            <Link to="/gofreight">Dashboard</Link>
          </Menu.Item>
        <Menu.SubMenu
          key="sub-ocean-import"
          icon={<UserOutlined />}
          title="Ocean Import"
        >
          <Menu.Item key="/ocean-import/new-shipment">
            <Link to="/ocean-import/new-shipment">New Shipment</Link>
          </Menu.Item>
          <Menu.Item key="/ocean-import/shipment-list">
            <Link to="/ocean-import/shipment-list">Shipment List</Link>
          </Menu.Item>
          <Menu.Item key="/ocean-import/MB_L-list">
            <Link to="/ocean-import/MB_L-list">MB/L List</Link>
          </Menu.Item>
          <Menu.Item key="/ocean-import/HB_L-list">
            <Link to="/ocean-import/HB_L-list">HB/L List</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu
          key="sub-trade-partner"
          icon={<UserOutlined />}
          title="Trade Partner"
        >
          <Menu.Item key="/trade-partner/new-tardepartner">
            <Link to="/trade-partner/new-tradepartner">New Tradepartner</Link>
          </Menu.Item>
          <Menu.Item  key="/trade-partner/credit-entry">
            <Link to="/trade-partner/credit-entry">Tradepartner Credit Entry</Link>
          </Menu.Item>
          <Menu.Item key="/trade-partner/tradepartner-list">
            <Link to="/trade-partner/tradepartner-list">Tradepartner List</Link>
          </Menu.Item>
        </Menu.SubMenu>
       
      </Menu>
    </Sider>
    </Layout>


  );
};

export default Sidebarrr;
