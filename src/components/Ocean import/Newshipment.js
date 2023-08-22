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
        width: 'fit-content',
        fontSize: '24px',
        padding: "0 0px",
        borderRadius: '8px',
        height:'40px'
      }}
    >
      <DefaultTabBar {...props} />
    </StickyBox>
  );

  return (
    <Tabs
      defaultActiveKey="Basic" // Set "Basic" as the active tab
      renderTabBar={renderTabBar}
      tabBarGutter={15}
      size='large'
      
    >
      {tabNames.map((tabName, index) => (
        <Tabs.TabPane
          tab={<span style={{ fontSize: '16px' }}>{tabName}</span>}
          key={tabName}
          disabled={tabName !== 'Basic'} // Disable tabs other than "Basic"
        >
          <div style={{ height: 'calc(100vh - 56px)' }}>
            {tabContents[index]}
          </div>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};
