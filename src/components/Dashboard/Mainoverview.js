
import React,{useState} from "react";

import {
  Row,
  Col,
  Table,
  DatePicker,
  Space,
  Button,
  Dropdown,
  Menu,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dashboard.css";
import {  DownOutlined} from '@ant-design/icons';
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { BarChart, Bar, XAxis, YAxis, Tooltip ,CartesianGrid } from 'recharts';
import { OverviewProfitCustomers } from "./traffic";
import { OverviewVolumeCustomers } from "./sales";
const { RangePicker } = DatePicker;
const columns = [
  {
    title: "SHIPMENT TYPE",
    dataIndex: "shipmentType",
    key: "shipmentType",
  },
  {
    title: "FILENO",
    dataIndex: "fileno",
    key: "fileno",
  },
  {
    title: "MB/L | MAWB No",
    dataIndex: "mblMawbNo",
    key: "mblMawbNo",
  },
  {
    title: "ETD",
    dataIndex: "etd",
    key: "etd",
  },
  {
    title: "ETA",
    dataIndex: "eta",
    key: "eta",
  },
  {
    title: "Profit",
    dataIndex: "profit",
    key: "profit",
  },
  {
    title: "OP",
    dataIndex: "op",
    key: "op",
  },
  {
    title: "IGNORE",
    dataIndex: "ignore",
    key: "ignore",
  },
];

const data = [
  {
    key: "1",
    shipmentType: "Type A",
    fileno: "F123",
    mblMawbNo: "M456",
    etd: "2023-08-20",
    eta: "2023-08-25",
    profit: "$1000",
    op: "John",
    ignore: "No",
  },
  {
    key: "2",
    shipmentType: "Type A",
    fileno: "F123",
    mblMawbNo: "M456",
    etd: "2023-08-20",
    eta: "2023-08-25",
    profit: "$1000",
    op: "John",
    ignore: "No",
  },
];

export const Mainoverview = () => {
    const [selectedItem, setSelectedItem] = useState('ALL'); 
    const items = ['All', 'Noticed','Ignored'];
    const handleItemSelect = ({ key }) => {
        setSelectedItem(key);
      };
      const menu = (
        <Menu onClick={handleItemSelect}>
          {items.map((item) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))}
        </Menu>
      );
    
  const columnStyle = {
    marginBottom: "10px", // Add margin between columns

    height: "100%",
    outerWidth: "100%",
  };

  return (
    <div>
      <div className="overvieww">
        <div>
          <Row gutter={15}>
            <Col span={6}>
              <div className="subdivss">
                <h3 className="headinggofdash">TOTAL PROFIT</h3>
                <p className="centervalue">100000</p>
                <p>
                  <FontAwesomeIcon icon={faCaretUp} /> 56%
                </p>
                <p className="prevstatus">Prev: RM 10000</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="subdivss">
                <h3 className="headinggofdash">
                  TOTAL VOLUME
                  <span style={{ fontSize: "14px" }}>(NO. OF B/L, AWB)</span>
                </h3>
                <p className="centervalue">100000</p>
                <p>
                  <FontAwesomeIcon icon={faCaretUp} /> 56%
                </p>
                <p className="prevstatus">Prev: 10000</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="subdivss">
                <h3 className="headinggofdash">NO OF ACTIVE CUSTOMERS</h3>
                <p className="centervalue">100000</p>
                <p>
                  <FontAwesomeIcon icon={faCaretUp} /> 56%
                </p>
                <p className="prevstatus">Prev: 100</p>
              </div>
            </Col>
            <Col span={6}>
              <div className="subdivss">
                <h3 className="headinggofdash">NO OF LOST CUSTOMERS</h3>
                <p className="centervalue">100000</p>
                <p>
                  <FontAwesomeIcon icon={faCaretUp} /> 56%
                </p>
                <p className="prevstatus">Prev: 100</p>
              </div>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <div>
          <Row gutter={10}>
            <Col span={12} style={columnStyle}>
              <OverviewProfitCustomers />
            </Col>
            <Col span={12} style={columnStyle}>
              <OverviewVolumeCustomers />
            </Col>
          </Row>
        </div>
      </div>

      <div className="negativeshipments">
        <Row>
          <Col span={24}>
            <div style={{ display: "flex",justifyContent:'space-between' }}>
                 <div style={{ display: "flex" }}>
              <div>
                <h1 style={{ whiteSpace: "nowrap", margin: 0 }}>
                  NEGATIVE PROFIT SHIPMENTS
                </h1>
              </div>
              <div>
                <Space
                  direction="vertical"
                  style={{ width: "100%", marginLeft: "20px" }}
                >
                 <RangePicker
                style={{ width: '140%' }}
                placeholder={['EXPORT ETD', 'Import ETA']}
              />
                </Space>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button.Group>
                  <Button>Show by MB/L</Button>
                  <Button>Show by HB/L</Button>
                </Button.Group>
                <Dropdown overlay={menu} >
            <Button   >
              {selectedItem} <DownOutlined />
            </Button>
          </Dropdown>
                <Button style={{ marginLeft: "20px",backgroundColor:'blue',color:'white' }}>Refresh</Button>
              </div>
            </div>
            </div>
           
          </Col>
          <Col span={24}>
          
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
      <div className="todolist">
        <Row>
            <Col span={24}>
                  <ToDoList/>
            </Col>
          
        </Row>
        </div>
        <div style={{ width: "100%" }}>
        <Row>
          <Col span={24}>
            
              <div >
                <BarrChart />
              </div>
            
          </Col>
        </Row>
        </div>
    </div>
  );
};



const ToDoList = () => {




    const columns = [
        {
          title: "NAME",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "ALERTS",
          dataIndex: "alertsss",
          key: "alerts",
        },
        {
          title: "WARNINGS",
          dataIndex: "warning",
          key: "warnings",
        },
       
      ];
      
  

      const data = [
        {
          key: "1",
          name:'Pick Up',
          Warning:'none',
          alertsss:"none"
        },
        
      ];


    const [selectedItemtodo, setSelectedItemtodo] = useState(''); 
    const items = ['Operations FGL (OPS.FGL)',''];
    const handleItemSelect = ({ key }) => {
        setSelectedItemtodo(key);
    };
    const menu = (
        <Menu onClick={handleItemSelect}>
            {items.map((item) => (
                <Menu.Item key={item}>{item}</Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className="todolist">
            <Row>
                <Col span={24}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      
                            <div>
                                <h1 style={{ whiteSpace: "nowrap", margin: 0 }}>
                                    TO-DO LIST
                                </h1>
                            </div>
                            <div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Button.Group>
                                        <Button>Summary</Button>
                                        <Button>Details</Button>
                                    </Button.Group>
                                    <Dropdown overlay={menu}>
                                        <Button>
                                            {selectedItemtodo} <DownOutlined />
                                        </Button>
                                    </Dropdown>
                                    <Button style={{ marginLeft: "20px", backgroundColor: 'blue', color: 'white' }}>Refresh</Button>
                                </div>
                            </div>
                        
                    </div>
                </Col>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row>
        </div>
    );
};








    const BarrChart = () => {
        const data = [
          { bank: "DEFAULT BANK", balance: 0 },
          { bank: "MALAYAN BANKING BERHAD", balance: 180000 },
        ];
      
        const CustomTooltip = ({ active, payload }) => {
          if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
              <div className="custom-tooltip">
                <p>{`Bank: ${data.bank}`}</p>
                <p>{`Balance: ${data.balance}`}</p>
              </div>
            );
          }
      
          return null;
        };
      
        return (
          <div style={{ width: "100%" }}>
            <Row>
              <Col span={24}>
                <BarChart width={400} height={400} data={data}>
                  <XAxis dataKey="bank" />
                  <YAxis
                    type="number"
                    tickCount={10}
                    tick={{ dy: 10 }}
                    domain={[0, 180000]}
                    tickFormatter={(value) => value.toLocaleString()}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="balance" fill="#8884d8" />
                </BarChart>
              </Col>
            </Row>
          </div>
           
          
     
        
    );
  };
