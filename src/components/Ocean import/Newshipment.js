



import React, { useState } from 'react';
import { Button, Collapse, Input, Table, Popconfirm, Form, Select, DatePicker, Checkbox, Col, Row } from 'antd';
import {DeleteOutlined ,PlusOutlined } from '@ant-design/icons';
import './Shipment.css'
const { TextArea } = Input;
const { Panel } = Collapse;
const { Option } = Select;

export const Newshipment = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [ismemoOpen, setIsmemoOpen] = useState(true);
    const [isSecondMemoOpen, setIsSecondMemoOpen] = useState(false); 
    const [tableData, setTableData] = useState([]);
    const [isAnyInputClicked, setIsAnyInputClicked] = useState(false);

    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);

    const handleCheckboxChange = (e) => {
      setShowAdditionalInputs(e.target.checked);
    };

    const handlememoToggle = () => {
        setIsmemoOpen((prevState) => !prevState);
    };

    const handleSecondMemoToggle = (e) => { 
        e.stopPropagation();// Handle the second collapse state
        setIsSecondMemoOpen((prevState) => !prevState);
    };
    const handleSecondMemoContentClick = (e) => {
        e.stopPropagation(); // Prevent the click event from propagating to the collapse header
    };



    const handleAddRow = () => {
        // Generate a unique key for the new row
        const newKey = Date.now().toString();
        // Create a new row object with the generated key
        const newRow = { key: newKey };
        // Add the new row to the tableData array
        setTableData((prevData) => [...prevData, newRow]);
    };
    const handleRemoveRow = (key) => {
        const newData = tableData.filter(item => item.key !== key);
        setTableData(newData);
    };

    const tableTitle = (
        <Row justify="space-between" align="middle">
            <Col>
                <Button type="primary" onClick={handleAddRow}>
                    <PlusOutlined /> 
                </Button>
            </Col>
           
        </Row>
    );
    const columns = [
        // ... (other columns)
        {
            title: tableTitle,
            dataIndex: 'tableTitle',
            key: 'tableTitle',
            render: (text, record) => (
                <Button type="danger" onClick={() => handleRemoveRow(record.key)}><DeleteOutlined /></Button>
            ), // Empty content for this column
        },
        {
            title:  'Subject',
            dataIndex: 'subject',
            key: 'subject',
            editable: true, // Make the column editable
            render: (text, record) => (
         
                  
                     <Input value={text} onChange={e => handleCellEdit(record.key, 'subject', e.target.value)} />
              
               
            ),
        },
        {
            title: 'Last Modified',
            dataIndex: 'lastModified',
            key: 'lastModified',
            editable: true,
            render: (text, record) => (
                <Input value={text} onChange={e => handleCellEdit(record.key, 'lastModified', e.target.value)} />
            ),
        },
        {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
            editable: true,
            render: (text, record) => (
                <Input value={text} onChange={e => handleCellEdit(record.key, 'created', e.target.value)} />
            ),
        },
        {
            title: 'Action/TP',
            dataIndex: 'action',
            key: 'action',
          
        },
    ];
    const handleSave = () => {
console.log("its clicked" )
    }
    const handleCellEdit = (key, dataIndex, value) => {
        const newData = [...tableData];
        const targetItem = newData.find(item => item.key === key);
        if (targetItem) {
            targetItem[dataIndex] = value;
            setTableData(newData);
            setIsAnyInputClicked(true);
        }
    };
   
    const formItemStyle = { marginBottom: '5px' };
        const formItemStyle1 = { marginBottom: '25px' };
        const formItemStyle2 = { marginBottom: '40px' };
        const inputstyle= { innerHeight: '15px' };
        const [placement, SetPlacement] = useState('topLeft');
        const [oblReceivedChecked, setOblReceivedChecked] = useState(true);
        
        const [receivedCheckedate, setReceivedCheckedate] = useState(false);
        const placementChange = (e) => {
          SetPlacement(e.target.value);
        };
    return (
  
   



        <div className='newshipment-container' >
             <Row className='mainrow' style={{minHeight: '200vh !important',width:'100%'}}>
            <Col span={20}>
             <>
                <Collapse activeKey={ismemoOpen ? '1' : ''}>
                  <Panel
                    style={{ backgroundColor: '#38323d' }}
                    header="MB/L 102012"
                    key="1"
                    onClick={handlememoToggle}>
    <Col span={24} style={{border:'1px solid orange' ,padding:'10px'}}>
    <div onClick={handleSecondMemoContentClick} >
     <Row>   
    <Col span={6} >
    <div >
    <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
    <Form.Item label="File No" style={formItemStyle}>
    <Input  />
    </Form.Item>
    <Form.Item label="Post Date" style={formItemStyle}>
    <Input  />
    </Form.Item>
    <Form.Item label="Forwarding Agent"  style={formItemStyle}>
    <Select  >
    <Option style={{  height: '24px' }} value="option1">Option 1</Option>
    <Option style={{  height: '24px' }} value="option2">Option 2</Option>
    <Option style={{  height: '24px' }} value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="OP" style={formItemStyle}>
    <Select style={{  height: '24px' }}>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    {showAdditionalInputs && (
        <>
          <Form.Item label="Customer Ref.No">
            <Input />
          </Form.Item>
          <Form.Item label="Customer" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    
    </Select>
    </Form.Item>
    <Form.Item label="Sales" style={formItemStyle2}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
   
    </Select>
    </Form.Item>
          {/* Add more additional inputs as needed */}
        </>
      )}
    <br/>
    <Form.Item label="Vessel" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Port of Loading" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Place of Delivery (DEL)" style={formItemStyle2}>
    
      <div style={{ display: 'flex', flexDirection: 'column' }}>
    
        <Select>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
          {/* Add more options as needed */}
        </Select>
      
      </div>
    </Form.Item>
    <br/>
    <Form.Item label="Freight" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="OB/L Type" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Latest Gate In" style={formItemStyle1}>
    <DatePicker style={{ width: '100%',height:'24px' }} placement={placement} />
    </Form.Item>
    </Form>
    </div>
    </Col>
    <Col  span={6}>
    <div>
    <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
    <Form.Item label="*MB/L No." style={formItemStyle}>
    <Input onClick={() => setIsAnyInputClicked(true)} />
    </Form.Item>
    <Form.Item label="Oversea Agent" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Co-loader" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Carrier Contact No" style={formItemStyle}>
    <Input />
    </Form.Item>
    
    {showAdditionalInputs && (
        <>
        
          <Form.Item label="Shipper" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    
    </Select>
    </Form.Item>
    <Form.Item label="Bill To" style={formItemStyle2}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
   
    </Select>
    </Form.Item>
          {/* Add more additional inputs as needed */}
        </>
      )}


    <Form.Item label="Voyage" style={formItemStyle}>
    <Input />
    </Form.Item>
    <Form.Item label="ETD" style={formItemStyle}>
    <DatePicker style={{ width: '100%',height:'24px' }} placement={placement} />
    </Form.Item>
    <Form.Item label="Place of Delivery ETA" style={formItemStyle}>
    <DatePicker style={{ width: '100%',height:'24px' }} placement={placement} />
    </Form.Item>
    <Form.Item label="ATD" style={formItemStyle2}>
    <DatePicker style={{ width: '100%',height:'24px' }} placement={placement} />
    </Form.Item>
    
    <Form.Item label="Ship Mode" style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="OB/L Received" style={formItemStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
    
          checked={oblReceivedChecked}
          onChange={(e) => setOblReceivedChecked(e.target.checked)}
        />
        <span style={{ marginLeft: '10px', flex: 1 }}>
          <DatePicker
            style={{ width: '100%',height:'24px' }}
            disabled={!oblReceivedChecked}
          />
        </span>
      </div>
    </Form.Item>
    </Form>
    </div>
    </Col>
    <Col  span={6}>
    <div>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
    <Form.Item label="*Office" style={formItemStyle}>
    <Select onClick={() => setIsAnyInputClicked(true)} >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Carrier" style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Agent Ref No" style={formItemStyle}>
    <Input />
    </Form.Item>
    <Form.Item label="Direct Master" style={formItemStyle}>
        <Checkbox onChange={handleCheckboxChange} />
      </Form.Item>
    
      {showAdditionalInputs && (
        <>
        
          <Form.Item label="Consignee" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    
    </Select>
    </Form.Item>
    <Form.Item label=" Sales  Type" style={formItemStyle2}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
   
    </Select>
    </Form.Item>
          {/* Add more additional inputs as needed */}
        </>
      )}
    <Form.Item label="CY Location" style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Port of Discharge" style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Final Destination" style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="ATA" style={formItemStyle2}>
    <DatePicker style={{ width: '100%',height:'24px' }} placement={placement} />
    </Form.Item>
    <Form.Item  label="*Service Term" style={formItemStyle}>
    <div  style={{ display: 'flex', alignItems: 'center'  }}>
    <Select style={{ marginBottom: '12px'}} >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    <p style={{ marginBottom: '12px'}} >~</p>
    <Select style={{ marginBottom: '12px'}}>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </div>
    
    </Form.Item>
    <Form.Item label=" Received Date" style={formItemStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
    
          checked={receivedCheckedate}
          onChange={(e) => setReceivedCheckedate(e.target.checked)}
        />
        <span style={{ marginLeft: '10px', flex: 1 }}>
          <DatePicker
            style={{ width: '100%',height:'24px' }}
            disabled={!receivedCheckedate}
          />
        </span>
      </div>
    </Form.Item>
    </Form>
    </div>
    </Col>
    <Col  span={6}>
    <div>
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
    <Form.Item label="B/L Type " style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="B/L Acct. Carrier " style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="Sub B/L No." style={formItemStyle2}>
    <Input />
    </Form.Item>
    {showAdditionalInputs && (
        <>
        
          <Form.Item label="Notify" style={formItemStyle}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    
    </Select>
    </Form.Item>
    <Form.Item label=" Cargo  Type" style={formItemStyle2}>
    <Select>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
   
    </Select>
    </Form.Item>
          {/* Add more additional inputs as needed */}
        </>
      )}

    <Form.Item label="CFS Location " style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    <Form.Item label="*ETA" style={formItemStyle1}>
    <DatePicker onClick={() => setIsAnyInputClicked(true)}  style={{ width: '100%',height:'24px' }} placement={placement} />
    </Form.Item>
    <Form.Item label="Final ETA " style={formItemStyle1}>
    <DatePicker style={{ width: '100%',height:'24px' }} placement={placement} />
    </Form.Item>
    <Form.Item label="ETB" style={formItemStyle2}>
    <DatePicker style={{ width: '100%',height:'24px' }} placement={placement} />
    </Form.Item>
    
    <Form.Item label="Container/Qty " style={formItemStyle1}>
    <Input />
    </Form.Item>
    <Form.Item label="Business Referred By " style={formItemStyle}>
    <Select >
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
    <Option value="option3">Option 3</Option>
    {/* Add more options as needed */}
    </Select>
    </Form.Item>
    </Form>
    </div>
    </Col>
    </Row>
    </div>
    <Collapse activeKey={isSecondMemoOpen ? '1' : ''}>
        <Panel style={{ backgroundColor: 'gray' }} header="Memo" key="1" onClick={handleSecondMemoToggle}>
            <div onClick={handleSecondMemoContentClick}>
                      <Row>
                    
                      <Col span={16} style={{marginRight:'10px'}}>
        {/* Ant Design Table */}
        <Table
            
            columns={columns} // Use the modified columns array
            dataSource={tableData}
            pagination={false}
        />
        {/* Add button */}
        
    </Col>
    
    
    
    
    
    
                <Col span={7}>
                    <div>
                    <TextArea  style={{backgroundColor:'#b5b3ae',minHeight:'150px'}}  />
                    </div>
                </Col>
            </Row>
            </div>
    
        </Panel>
    </Collapse>
    
    </Col>
                  </Panel>
                  </Collapse>
                 
                </>
                
              </Col>
              <Col span={4} >
                <div >
                <Button style={{height:'40px' , width:'90%' , marginLeft:'20px', marginTop:'10px'}} >+ Add HB/L</Button>

                </div>
              </Col>
              <Button
               style={{
                backgroundColor:'green',
                width:'110px',
                position: 'fixed',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '5%',
                zIndex: 9999, // To ensure the button is above other content
            }}
    type="primary"
    disabled={!isAnyInputClicked} // Disable the button if no input above the table is clicked
    onClick={handleSave}
>
    Save
</Button>
            </Row>
    

          </div>
       
      )
    }
    