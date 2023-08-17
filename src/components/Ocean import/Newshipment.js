 import React, { useState } from 'react';
 import axios from 'axios';
import { Button, Collapse, Input, Table, Popconfirm, Form, Select, DatePicker, Checkbox, Col, Row } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
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
      title: 'Subject',
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

  const [formData, setFormData] = useState({
    fileNo: "",
    postDate: "",
    forwardingAgent: "",
    op: "",
    customer_RefNo:"",
    customer :"",
    sales :"",
    vessel:"",
    port_of_Loading:"",
    place_of_Delivery:"",
    freight:"",
    obl_Type:"",
    latestGateIn:null,
    mblNo:"",
    overseaAgent:"",
    coLoader:"",
    carrierContactNo:"",
    shipper:"",
    billTo:"",
    voyage:"",
    ETD: null,
    ATD: null,
    placeOfDeliveryETA: null,
    shipMode:"",
    OblReceived :"",
    office:"",
    carrier:"",
    agentRefNo:"",
    consignee:"",
    salesType:"",
    cyLocation:"",
    portofDischarge:"",
    finalDestination:"",
    ATA: null,
    serviceTerm1:"",
    serviceterm2:"",
    receivedDate: null,
    blType:"",
    blAcctCarrier:"",
    subBLNo:"",
    notify:"",
    cargoType:"",
    cfsLocation:"",
    ETA: null,
    finalETA: null,
    ETB: null,
    containerQty:"",
    businessRefer:"",
  });


  const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/your-api-endpoint", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      console.log("Data submitted successfully:", response.data);
      // You can add any success handling here
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle the error as needed
    }
  };



  const handleSave = () => {
    console.log("its clicked")
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
  const inputstyle = { innerHeight: '15px' };
  const [placement, SetPlacement] = useState('topLeft');
  const [oblReceivedChecked, setOblReceivedChecked] = useState(true);

  const [receivedCheckedate, setReceivedCheckedate] = useState(false);
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };




  return (
     <div className='newshipment-container' >
      <Row style={{ minHeight: '200vh !important' }}>
        <Col span={20}>
          <>
            <Collapse activeKey={ismemoOpen ? '1' : ''}>
              <Panel
                style={{ backgroundColor: '#38323d' }}
                header="MB/L 102012"
                key="1"
                onClick={handlememoToggle}>
                <Col span={24} style={{ border: '1px solid orange', padding: '10px' }}>
                  <div onClick={handleSecondMemoContentClick} >
                    <Row>
                      <Col span={6} >
                        <div >
                          <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
                            <Form.Item label="File No" style={formItemStyle}>
                              <Input value={formData.fileNo}  onChange={(e) => handleFieldChange("fileNo", e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Post Date" style={formItemStyle}>
                              <Input value={formData.postDate}  onChange={(e) => handleFieldChange("postDate", e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Forwarding Agent" style={formItemStyle}>
                              <Select value={formData.forwardingAgent}  onChange={(value) => handleFieldChange("forwardingAgent", value)}  >
                                <Option style={{ height: '24px' }} value="option1">Option 1</Option>
                                <Option style={{ height: '24px' }} value="option2">Option 2</Option>
                                <Option style={{ height: '24px' }} value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="OP" style={formItemStyle}>
                              <Select style={{ height: '24px' }} value={formData.op}  onChange={(value) => handleFieldChange("op", value)}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            {showAdditionalInputs && (
                              <>
                                <Form.Item label="Customer Ref.No">
                                  <Input value={formData.customer_RefNo}  onChange={(e) => handleFieldChange("customer_RefNo", e.target.value)} />
                                </Form.Item>
                                <Form.Item label="Customer" style={formItemStyle}>
                                  <Select value={formData.customer}  onChange={(value) => handleFieldChange("customer", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                <Form.Item label="Sales" style={formItemStyle2}>
                                  <Select value={formData.sales}  onChange={(value) => handleFieldChange("sales", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                {/* Add more additional inputs as needed */}
                              </>
                            )}
                            <br />
                            <Form.Item label="Vessel" style={formItemStyle}>
                              <Select value={formData.vessel} onChange={(value) => handleFieldChange("vessel", value)}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Port of Loading" style={formItemStyle}>
                              <Select value={formData.port_of_Loading} onChange={(value) => handleFieldChange("port_of_Loading", value)}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Place of Delivery (DEL)" style={formItemStyle2}>

                              <div style={{ display: 'flex', flexDirection: 'column' }}>

                                <Select value={formData.place_of_Delivery} onChange={(value) => handleFieldChange("place_of_Delivery", value)}>
                                  <Option value="option1">Option 1</Option>
                                  <Option value="option2">Option 2</Option>
                                  <Option value="option3">Option 3</Option>
                                  {/* Add more options as needed */}
                                </Select>

                              </div>
                            </Form.Item>
                            <br />
                            <Form.Item label="Freight" style={formItemStyle}>
                              <Select value={formData.freight} onChange={(value) => handleFieldChange("freight", value)}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="OB/L Type" style={formItemStyle}>
                              <Select value={formData.obl_Type} onChange={(value) => handleFieldChange("obl_Type", value)}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Latest Gate In" style={formItemStyle1}>
                              <DatePicker value={formData.latestGateIn} onChange={(date) => handleFieldChange('latestGateIn', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                            </Form.Item>
                          </Form>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
                            <Form.Item label="*MB/L No." style={formItemStyle}>
                              <Input onClick={() => setIsAnyInputClicked(true)} value={formData.mblNo} onChange={(e) => handleFieldChange("mblNo", e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Oversea Agent" style={formItemStyle}>
                              <Select value={formData.overseaAgent} onChange={(value) => handleFieldChange("overseaAgent", value)}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Co-loader" style={formItemStyle}>
                              <Select value={formData.coLoader} onChange={(value) => handleFieldChange("coLoader", value)}>
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Carrier Contact No" style={formItemStyle}>
                              <Input value={formData.carrierContactNo} onChange={(e) => handleFieldChange("carrierContactNo", e.target.value)} />
                            </Form.Item>

                            {showAdditionalInputs && (
                              <>

                                <Form.Item label="Shipper" style={formItemStyle}>
                                  <Select value={formData.shipper} onChange={(value) => handleFieldChange("shipper", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                <Form.Item label="Bill To" style={formItemStyle2}>
                                  <Select value={formData.billTo} onChange={(value) => handleFieldChange("billTo", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                {/* Add more additional inputs as needed */}
                              </>
                            )}


                            <Form.Item label="Voyage" style={formItemStyle}>
                              <Input value={formData.voyage} onChange={(e) => handleFieldChange("voyage", e.target.value)} />
                            </Form.Item>
                            <Form.Item label="ETD" style={formItemStyle}>
                              <DatePicker value={formData.ETD} onChange={(date) => handleFieldChange('ETD', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                            </Form.Item>
                            <Form.Item label="Place of Delivery ETA" style={formItemStyle}>
                              <DatePicker value={formData.placeOfDeliveryETA} onChange={(date) => handleFieldChange('placeOfDeliveryETA', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                            </Form.Item>
                            <Form.Item label="ATD" style={formItemStyle2}>
                              <DatePicker value={formData.ATD} onChange={(date) => handleFieldChange('ATD', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                            </Form.Item>

                            <Form.Item label="Ship Mode" style={formItemStyle}>
                              <Select value={formData.shipMode} onChange={(value) => handleFieldChange("shipMode", value)} >
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
                                  <DatePicker value={formData.OblReceived} onChange={(date) => handleFieldChange('oblReceived', date)}
                                    style={{ width: '100%', height: '24px' }}
                                    disabled={!oblReceivedChecked}
                                  />
                                </span>
                              </div>
                            </Form.Item>
                          </Form>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
                            <Form.Item label="*Office" style={formItemStyle}>
                              <Select onClick={() => setIsAnyInputClicked(true)} value={formData.office} onChange={(value) => handleFieldChange("office", value)} >
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Carrier" style={formItemStyle}>
                              <Select value={formData.carrier} onChange={(value) => handleFieldChange("carrier", value)} >
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Agent Ref No" style={formItemStyle}>
                              <Input value={formData.agentRefNo} onChange={(e) => handleFieldChange("agentRefNo", e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Direct Master" style={formItemStyle}>
                              <Checkbox onChange={handleCheckboxChange} />
                            </Form.Item>

                            {showAdditionalInputs && (
                              <>

                                <Form.Item label="Consignee" style={formItemStyle}>
                                  <Select value={formData.consignee} onChange={(value) => handleFieldChange("consignee", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                <Form.Item label=" Sales  Type" style={formItemStyle2}>
                                  <Select value={formData.salesType} onChange={(value) => handleFieldChange("salesType", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                {/* Add more additional inputs as needed */}
                              </>
                            )}
                            <Form.Item label="CY Location" style={formItemStyle}>
                              <Select value={formData.cyLocation} onChange={(value) => handleFieldChange("cyLocation", value)} >
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Port of Discharge" style={formItemStyle}>
                              <Select value={formData.portofDischarge} onChange={(value) => handleFieldChange("portofDischarge", value)} >
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Final Destination" style={formItemStyle}>
                              <Select value={formData.finalDestination} onChange={(value) => handleFieldChange("finalDestination", value)} >
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="ATA" style={formItemStyle2}>
                              <DatePicker value={formData.ATA}  onChange={(date) => handleFieldChange('ATA', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                            </Form.Item>
                            <Form.Item label="*Service Term" style={formItemStyle}>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Select style={{ marginBottom: '12px' }} value={formData.serviceTerm1} onChange={(value) => handleFieldChange("serviceTerm1", value)} >
                                  <Option value="option1">Option 1</Option>
                                  <Option value="option2">Option 2</Option>
                                  <Option value="option3">Option 3</Option>
                                  {/* Add more options as needed */}
                                </Select>
                                <p style={{ marginBottom: '12px' }} >~</p>
                                <Select style={{ marginBottom: '12px' }} value={formData.serviceterm2} onChange={(value) => handleFieldChange("serviceTerm2", value)}>
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
                                  <DatePicker value={formData.receivedDate} onChange={(date) => handleFieldChange('receivedDate', date)}
                                    style={{ width: '100%', height: '24px' }}
                                    disabled={!receivedCheckedate}
                                  />
                                </span>
                              </div>
                            </Form.Item>
                          </Form>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div>
                          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
                            <Form.Item label="B/L Type " style={formItemStyle}>
                              <Select value={formData.blType} onChange={(value) => handleFieldChange("blType", value)} >
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="B/L Acct. Carrier " style={formItemStyle}>
                              <Select value={formData.blAcctCarrier} onChange={(value) => handleFieldChange("blAcctCarrier", value)} >
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="Sub B/L No." style={formItemStyle2}>
                              <Input value={formData.subBLNo} onChange={(e) => handleFieldChange("subBLNo", e.target.value)} />
                            </Form.Item>
                            {showAdditionalInputs && (
                              <>

                                <Form.Item label="Notify" style={formItemStyle}>
                                  <Select value={formData.notify} onChange={(value) => handleFieldChange("notify", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                <Form.Item label=" Cargo  Type" style={formItemStyle2}>
                                  <Select value={formData.cargoType} onChange={(value) => handleFieldChange("cargoType", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                {/* Add more additional inputs as needed */}
                              </>
                            )}

                            <Form.Item label="CFS Location " style={formItemStyle}>
                              <Select value={formData.cfsLocation} onChange={(value) => handleFieldChange("cfsLocation", value)} >
                                <Option value="option1">Option 1</Option>
                                <Option value="option2">Option 2</Option>
                                <Option value="option3">Option 3</Option>
                                {/* Add more options as needed */}
                              </Select>
                            </Form.Item>
                            <Form.Item label="*ETA" style={formItemStyle1}>
                              <DatePicker value={formData.ETA} onChange={(date) => handleFieldChange('ETA', date)} onClick={() => setIsAnyInputClicked(true)} style={{ width: '100%', height: '24px' }} placement={placement} />
                            </Form.Item>
                            <Form.Item label="Final ETA " style={formItemStyle1}>
                              <DatePicker value={formData.finalETA} onChange={(date) => handleFieldChange('finalETA', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                            </Form.Item>
                            <Form.Item label="ETB" style={formItemStyle2}>
                              <DatePicker value={formData.ETB} onChange={(date) => handleFieldChange('ETB', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                            </Form.Item>

                            <Form.Item label="Container/Qty " style={formItemStyle1}>
                              <Input value={formData.containerQty} onChange={(e) => handleFieldChange("containerQty", e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Business Referred By " style={formItemStyle}>
                              <Select value={formData.businessRefer} onChange={(value) => handleFieldChange("businessRefer", value)} >
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

                          <Col span={16} style={{ marginRight: '10px' }}>
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
                              <TextArea style={{ backgroundColor: '#b5b3ae', minHeight: '150px' }} />
                            </div>
                          </Col>
                        </Row>
                      </div>

                    </Panel>
                  </Collapse>
                </Col>
                <Button
                  style={{
                    backgroundColor: '#26a69a',
                    color: "white",
                    marginTop:"20px",
                    width: '110px',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: '5%',
                    zIndex: 9999, // To ensure the button is above other content
                  }}
                  type="primary"
                  disabled={!isAnyInputClicked} // Disable the button if no input above the table is clicked
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Panel>
            </Collapse>

          </>

        </Col>
        <Col span={4} >
          <Button style={{ height: '40px', width: '250px', marginLeft: '20px', marginTop: '10px' }} >+ Add HB/L</Button>
        </Col>
      </Row>


    </div>

  )
}
