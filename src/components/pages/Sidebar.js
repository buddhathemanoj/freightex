

import React, { useState } from 'react';
import { DesktopOutlined, FileOutlined, BookTwoTone, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import  '../../App.css'
import { Newshipment } from '../Ocean import/Newshipment';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
    getItem('Ocean Import', '1', <UserOutlined />, [
      getItem('New Shipment', '1.1'),
      getItem('Shipment List', '1.2'),
      getItem('MB/L List', '1.3'),
      getItem('HB/L List', '1.4'),
    ]),
    getItem('Ocean Export', '2', <UserOutlined />, [
      getItem('New Shipment', '2.1'),
      getItem('My Shipment List', '2.2'),
      getItem('Master B/L List', '2.3'),
      getItem('House B/L List', '2.4'),
      getItem('New Booking', '2.5'),
      getItem('Booking List', '2.6'),
      getItem('New Vessel Schedule', '2.7'),
      getItem('Vessel Schedule List', '2.8'),
    ]),
    getItem('Sales', '3', <UserOutlined />, [
      getItem('New Quotation', '3.1'),
      getItem('Quotation List', '3.2'),
    ]),
    getItem('Trade Partner', '4', <UserOutlined />, [
      getItem('New Trade Partner', '4.1'),
      getItem('Trade Partner Credit Entry', '4.2'),
      getItem('Trade Partner List', '4.3'),
    ]),
  ];
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');
  const [response, setResponse] = useState(null); // State for the generated story

  const colorBgContainer = '#38323d';
  const colorBgContainer1 = '#38323d';
  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
  };


  const getContentForMenuKey = (key) => {
    // You can define the content for each menu key here
    switch (key) {
        case '1':
          return 'Ocean Import content goes here';
        case '1.1':
          return <Newshipment/>;
        case '1.2':
          return 'Shipment List content goes here';
        case '1.3':
          return 'MB/L List content goes here';
        case '1.4':
          return 'HB/L List content goes here';
        case '2':
          return (
            <div>
              <h1>Ocean Export</h1>
            </div>
          );
        case '2.1':
          return 'New Shipment content goes here';
        case '2.2':
          return 'My Shipment List content goes here';
        case '2.3':
          return 'Master B/L List content goes here';
        case '2.4':
          return 'House B/L List content goes here';
        case '2.5':
          return 'New Booking content goes here';
        case '2.6':
          return 'Booking List content goes here';
        case '2.7':
          return 'New Vessel Schedule content goes here';
        case '2.8':
          return 'Vessel Schedule List content goes here';
        case '3':
          return 'Sales content goes here';
        case '3.1':
          return 'New Quotation content goes here';
        case '3.2':
          return 'Quotation List content goes here';
        case '4':
          return 'Trade Partner content goes here';
        case '4.1':
          return 'New Trade Partner content goes here';
        case '4.2':
          return 'Trade Partner Credit Entry content goes here';
        case '4.3':
          return 'Trade Partner List content goes here';
        default:
          return 'Default content goes here';
      }
    };
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
<Header style={{paddingBottom:'15px 0px ' , backgroundColor:colorBgContainer}}>
    <h1 style={{color:'white' ,paddingBottom:'20px' }}>Go Freight</h1>
   
  </Header> 
 <Layout>
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: colorBgContainer1, color: 'white' }}>
      <div className="demo-logo-vertical" />
      <Menu style={{ backgroundColor: colorBgContainer1 ,color:'white'}} selectedKeys={[selectedMenuKey]} mode="inline" onClick={handleMenuClick} items={items} />
    </Sider>
    <Layout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{selectedMenuKey}</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: " 0", minHeight: 360 }}>
          {/* Render the content dynamically based on the selected menu key */}
          {getContentForMenuKey(selectedMenuKey)}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Digisailor ©2023 Created by Manoj Prabhakar</Footer>
    </Layout>
  </Layout>
</Layout>
  );
};

export default Sidebar;

