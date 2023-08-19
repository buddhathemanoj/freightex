


import React from 'react';
import StickyBox from 'react-sticky-box';
import { Tabs, theme,Row,Col } from 'antd';
import { Basic } from './NewShipment/Basic';
import './Shipment.css'; // Import the custom CSS file

const tabNames = [
  "Basic",
  "Container & Item",
  "Accounting",
  "Doc Center",
  "Status"
];

const tabContents = [
  <Basic/>,
  "Content of Container & Item Tab",
  "Content of Accounting Tab",
  "Content of Doc Center Tab",
  "Content of Status Tab"
];

export const Newshipment = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
        background: colorBgContainer,
        width: 'fit-content', // Adjust tab bar width
        fontSize:'24px',
        padding:"0 30px",   // Center the tab bar
        borderRadius: '8px'  // Add border radius
      }}
    >
      <DefaultTabBar {...props} />
    </StickyBox>
  );

  return (
   
      <Tabs
      defaultActiveKey="1"
      renderTabBar={renderTabBar}
      tabBarGutter={15} // Adjust the gap between tabs
     size='large'
      
      style={{ height: '100vh' }} // Set a height to the Tabs container
    >
      {tabNames.map((tabName, index) => (
        <Tabs.TabPane tab={<span style={{ fontSize: '20px' }}>{tabName}</span>}
        key={index + 1}>
          <div style={{ height: 'calc(100vh - 56px)' }}>
            {tabContents[index]}
          </div>
        </Tabs.TabPane>
      ))}
    </Tabs>
     
    
  );
};