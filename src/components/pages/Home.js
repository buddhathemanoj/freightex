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
        defaultOpenKeys={['sub-ocean-import', 'sub-ocean-export', 'sub-sales', 'sub-trade-partner']}
      >
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
          <Menu.Item key="/ocean-export/mb-l-list">
            <Link to="/ocean-export/mb-l-list">MB/L List</Link>
          </Menu.Item>
          <Menu.Item key="/ocean-export/hb-l-list">
            <Link to="/ocean-export/hb-l-list">HB/L List</Link>
          </Menu.Item>
          <Menu.Item key="/ocean-export/newbooking">
            <Link to="/ocean-export/new-shipment">New Booking</Link>
          </Menu.Item>
          <Menu.Item key="/ocean-export/bookinglist">
            <Link to="/ocean-export/shipment-list">Booking List</Link>
          </Menu.Item>
          <Menu.Item key="/ocean-export/newvessel-schedule">
            <Link to="/ocean-export/newvessel-schedule">New Vessel Schedule</Link>
          </Menu.Item>
          <Menu.Item key="/ocean-export/vessel-schedulelist">
            <Link to="/ocean-export/vessel-schedulelist">Vessel Schedule List</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="/sales" icon={<UserOutlined />}>
          <Link to="/sales">Sales</Link>
        </Menu.Item>
        <Menu.Item key="/trade-partner" icon={<UserOutlined />}>
          <Link to="/trade-partner">Trade Partner</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    </Layout>


  );
};

export default Sidebarrr;
