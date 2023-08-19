import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, DashboardOutlined, ImportOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import Breadcrumbs from './Breadcrumbs';

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
  const [collapsed, setCollapsed] = useState(true);
  const [openSubMenuKeys, setOpenSubMenuKeys] = useState([]);

  const handleSubMenuClick = (key) => {
    if (openSubMenuKeys.includes(key)) {
      setOpenSubMenuKeys(openSubMenuKeys.filter(subKey => subKey !== key));
    } else {
      setOpenSubMenuKeys([...openSubMenuKeys, key]);
    }
  };

  const handleMenuCollapse = () => {
    setCollapsed(!collapsed);
  };

  const location = useLocation();

  return (
    <div style={{ display:'flex', overflowX:'hidden'  }}>
    <div style={{ position: 'fixed', left: 0, top:'46px', bottom: 0, zIndex: 10}}>
      <Sider
        collapsible
        collapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)} //Mouse hover effect
        onMouseLeave={() => setCollapsed(true)} //Mouse hover effect
        style={{
          backgroundColor: colorBgContainer1,
          color: 'white',
          minHeight: '99.5vh'
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          style={{ backgroundColor: colorBgContainer1, color: 'white' }}
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={openSubMenuKeys}
        >
          <Menu.Item key="/gofreight" icon={<DashboardOutlined/>}>
            <Link to="/gofreight">Dashboard</Link>
          </Menu.Item>

          <Menu.SubMenu
            key="sub-ocean-import"
            icon={<ImportOutlined />}
            title="Ocean Import"
            onTitleClick={() => handleSubMenuClick('sub-ocean-import')}
            open={openSubMenuKeys.includes('sub-ocean-import')}
          >
            <Menu.Item key="/ocean-import/new-shipment">
              <Link to="/ocean-import/new-shipment">New Shipment</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-import/shipment-list">
              <Link to="/ocean-import/shipment-list">Shipment List</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-import/master-bl-list">
              <Link to="/ocean-import/master-bl-list">Master B/L List</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-import/house-bl-list">
              <Link to="/ocean-import/house-bl-list">House B/L List</Link>
            </Menu.Item>
          </Menu.SubMenu>

          {/* <Menu.SubMenu
            key="sub-ocean-export"
            icon={<UserOutlined />}
            title="Ocean Export"
            onTitleClick={() => handleSubMenuClick('sub-ocean-export')}
            open={openSubMenuKeys.includes('sub-ocean-export')}
          >
            <Menu.Item key="/ocean-export/new-shipment">
              <Link to="/ocean-export/new-shipment">New Shipment</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-export/shipment-list">
              <Link to="/ocean-export/shipment-list">Shipment List</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-export/master-bl-list">
              <Link to="/ocean-export/master-bl-list">Master B/L List</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-export/house-bl-list">
              <Link to="/ocean-export/house-bl-list">House B/Layout List</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-export/new-booking">
              <Link to="/ocean-export/new-booking">New Booking</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-export/booking-list">
              <Link to="/ocean-export/booking-list">Booking List</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-export/new-vessel-schedule">
              <Link to="/ocean-export/new-vessel-schedule">New Vessel Schedule</Link>
            </Menu.Item>
            <Menu.Item key="/ocean-export/vessel-schedule-list">
              <Link to="/ocean-export/vessel-schedule-list">Vessel Schedule List</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="sub-sales"
            icon={<UserOutlined />}
            title="Sales"
            onTitleClick={() => handleSubMenuClick('sub-sales')}
            open={openSubMenuKeys.includes('sub-sales')}
          >
            <Menu.Item key="/sales/new-quotation">
              <Link to="/sales/new-quotation">New Quotation</Link>
            </Menu.Item>
            <Menu.Item key="/sales/quotation-list">
              <Link to="/sales/quotation-list">Quotation List</Link>
            </Menu.Item>
          </Menu.SubMenu> */}

          <Menu.SubMenu
            key="sub-trade-partner"
            icon={<UserOutlined />}
            title="Trade-partner"
            onTitleClick={() => handleSubMenuClick('sub-trade-partner')}
            open={openSubMenuKeys.includes('sub-trade-partner')}
          >
            <Menu.Item key="/trade-partner/new-trade-partner">
              <Link to="/trade-partner/new-trade-partner">New Trade Partner</Link>
            </Menu.Item>
            <Menu.Item key="/trade-partner/trade-partner-credit-entry">
              <Link to="/trade-partner/trade-partner-credit-entry">Trade Partner Credit Entry</Link>
            </Menu.Item>
            <Menu.Item key="/trade-partner/trade-partner-list">
              <Link to="/trade-partner/trade-partner-list">Trade Partner List</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      </div>
      <div style={{background: 'lightgrey', top:'46px', left:'80px', position:'absolute', height: '30px', width:'2000px'}}>
      <Breadcrumbs/>
      </div>
      </div>
  );
};

export default Sidebarrr;
