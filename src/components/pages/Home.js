import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
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

  const location = useLocation(); // Get the current location

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
        defaultSelectedKeys={[location.pathname]} // Use the current location as defaultSelectedKeys
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
    <Menu.Item key="/ocean-import/shipment-list">
      <Link to="/ocean-import/shipment-list">Master B/L List</Link>
    </Menu.Item>
    <Menu.Item key="/ocean-import/shipment-list">
      <Link to="/ocean-import/shipment-list">House B/Layout List</Link>
    </Menu.Item>
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
    <Menu.Item key="/ocean-export/shipment-list">
      <Link to="/ocean-export/shipment-list">Master B/L List</Link>
    </Menu.Item>
    <Menu.Item key="/ocean-export/shipment-list">
      <Link to="/ocean-export/shipment-list">House B/Layout List</Link>
    </Menu.Item>
    <Menu.Item key="/ocean-export/shipment-list">
      <Link to="/ocean-export/shipment-list">New Booking</Link>
    </Menu.Item>
    <Menu.Item key="/ocean-export/shipment-list">
      <Link to="/ocean-export/shipment-list">Booking List</Link>
    </Menu.Item>
    <Menu.Item key="/ocean-export/shipment-list">
      <Link to="/ocean-export/shipment-list">New Vessel Schedule</Link>
    </Menu.Item>
    <Menu.Item key="/ocean-export/shipment-list">
      <Link to="/ocean-export/shipment-list">Vessel Schedule List</Link>
    </Menu.Item>
  </Menu.SubMenu>

  <Menu.SubMenu
    key="sub-sales"
    icon={<UserOutlined />}
    title="Sales"
  >
    <Menu.Item key="/sales/new-quotation">
      <Link to="/sales/new-quotation">New Quotation</Link>
    </Menu.Item>
    <Menu.Item key="/sales/quotation-list">
      <Link to="/sales/quotation-list">Quotation List</Link>
    </Menu.Item>
  </Menu.SubMenu>

  <Menu.SubMenu
    key="sub-trade-partner"
    icon={<UserOutlined />}
    title="Trade-partner"
  >
    <Menu.Item key="/trade-partner/new-quotation">
      <Link to="/trade-partner/new-quotation">New Trade Partner</Link>
    </Menu.Item>
    <Menu.Item key="/trade-partner/quotation-list">
      <Link to="/trade-partner/quotation-list">Trade Partner Credit Entry</Link>
    </Menu.Item>
    <Menu.Item key="/trade-partner/quotation-list">
      <Link to="/trade-partner/quotation-list">Trade Partner List</Link>
    </Menu.Item>
  </Menu.SubMenu>
</Menu>
</Sider>
  );
};

export default Sidebarrr;
