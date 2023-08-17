import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const { Sider } = Layout;

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
    <Sider
      collapsible
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      style={{
        backgroundColor: colorBgContainer1,
        color: 'white',
        minHeight: '100vh',
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
  style={{ backgroundColor: colorBgContainer1, color: 'white' }}
  mode="inline"
  defaultSelectedKeys={['/gofreight']}
  defaultOpenKeys={[
    'sub-ocean-import',
    'sub-ocean-export',
    'sub-sales',
    'sub-trade-partner',
  ]}
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
    {/* Add more Ocean Import submenu items */}
  </Menu.SubMenu>

  <Menu.SubMenu
    key="sub-ocean-export"
    icon={<UserOutlined />}
    title="Ocean Export"
  >
    <Menu.Item key="/ocean-export/new-shipment">
      <Link to="/ocean-export/new-shipment">New Shipment</Link>
    </Menu.Item>
    <Menu.Item key="/ocean-export/shipment-list">
      <Link to="/ocean-export/shipment-list">Shipment List</Link>
    </Menu.Item>
    {/* Add more Ocean Export submenu items */}
  </Menu.SubMenu>

  <Menu.Item key="/sales" icon={<UserOutlined />}>
    <Link to="/sales">Sales</Link>
  </Menu.Item>

  <Menu.Item key="/trade-partner" icon={<UserOutlined />}>
    <Link to="/trade-partner">Trade Partner</Link>
  </Menu.Item>
</Menu>
</Sider>
  );
};

export default Sidebarrr;
