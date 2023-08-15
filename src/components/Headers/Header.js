import React from 'react';
import { Layout, Dropdown, Menu } from 'antd';
import { UserOutlined, DownOutlined ,LogoutOutlined} from '@ant-design/icons';

const { Header } = Layout;
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

const HeaderComponent = ({ username }) => {
  const colorBgContainer = '#38323d';
  return (
    <Layout >
      <Header style={{ paddingBottom: '15px 0px ', display: 'flex', justifyContent: "space-between", backgroundColor: colorBgContainer }}>
        <div>
          <h1 style={{ color: 'white', paddingBottom: '20px' }}>Go Freight</h1>
        </div>
        <div style={{ padding: '20px 0 0 0' }}>
          {/* Ant Design Dropdown */}
          <Dropdown overlay={userMenu} style={{ color: 'white' }}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} style={{ color: 'white' }}>
              <UserOutlined style={{ fontSize: '18px', marginRight: '5px' }} />
              {username} <DownOutlined style={{ fontSize: '12px' }} />
            </a>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
