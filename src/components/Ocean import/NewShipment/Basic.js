import React, { useState } from 'react';
import axios from 'axios';
import { Button, Collapse, Input, Table, Popconfirm, Form, Select, DatePicker, Checkbox, Col, Row, Radio } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import '../Shipment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { color, fontSize } from '@mui/system';
import CutomSelect from './CustomSelect';
import CustomSelect from './CustomSelect';
const { TextArea } = Input;
const { Panel } = Collapse;
const { Option } = Select;

export const Basic = () => {


  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [ismemoOpen, setIsmemoOpen] = useState(true);
  const [ismemoOpen1, setIsmemoOpen1] = useState(false);
  const [isSecondMemoOpen, setIsSecondMemoOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isAnyInputClicked, setIsAnyInputClicked] = useState(false);
  const [expandIconPosition, setExpandIconPosition] = useState('end');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]

  const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
  const [addhbl, setAddhbl] = useState(false);

  const handleAddhbl = () => {
    setAddhbl(true);
    setIsmemoOpen(false);
    setIsmemoOpen1(true);
  }

  const handlecloseAddhbl = () => {
    setAddhbl(false);
  }

  const [showPlusInput, setShowPlusInput] = useState(false);
  const [showHBLPlusInput, setShowHBLPlusInput] = useState(false);

  const toggleInput = () => {
    setShowPlusInput(prevShowPlusInput => !prevShowPlusInput);
  };

  const hbltoggleInput = () => {
    setShowHBLPlusInput(prevShowHBLPlusInput => !prevShowHBLPlusInput);
  };

  const handleCheckboxChange = (e) => {
    setShowAdditionalInputs(e.target.checked);
  };

  const handlememoToggle = () => {
    setIsmemoOpen((prevState) => !prevState);
    setIsmemoOpen1((prevState) => !prevState);
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
    <Row justify="space-between" align="middle" style={{height:'32px'}}>
      <Col style={{padding:'0'}}>
        <Button type="primary" onClick={handleAddRow} style={{background:'#72C5BD', borderRadius:'0'}}>
          <PlusOutlined />
        </Button>
      </Col>

    </Row>
  );
  const columns = [

    {
      title: tableTitle,
      dataIndex: 'tableTitle',
      key: 'tableTitle',
      className: 'custom-table-header',
      render: (text, record) => (
        <Button type="danger" onClick={() => handleRemoveRow(record.key)}><DeleteOutlined /></Button>
      ), // Empty content for this column
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      sorter: {
      compare: (a, b) => a.subject - b.subject,
      multiple: 3,
    },
      editable: true, // Make the column editable
      render: (text, record) => (


        <Input value={text} onChange={e => handleCellEdit(record.key, 'subject', e.target.value)} style={{padding:'0', height:'32px'}}/>


      ),
    },
    {
      title: 'Last Modified',
      dataIndex: 'lastModified',
      key: 'lastModified',
      sorter: {
      compare: (a, b) => a.lastModified - b.lastModified,
      multiple: 3,
    },
      editable: true,
      render: (text, record) => (
        <Input value={text} onChange={e => handleCellEdit(record.key, 'lastModified', e.target.value)} />
      ),
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      sorter: {
      compare: (a, b) => a.created - b.created,
      multiple: 3,
    },
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
    customer_RefNo: "",
    customer: "",
    sales: "",
    vessel: "",
    port_of_Loading: "",
    place_of_Delivery: "",
    freight: "",
    obl_Type: "",
    latestGateIn: null,
    place_of_Receipt: "",
    it_Date: null,
    mblNo: "",
    overseaAgent: "",
    coLoader: "",
    carrierContactNo: "",
    shipper: "",
    billTo: "",
    voyage: "",
    ETD: null,
    ATD: null,
    placeOfDeliveryETA: null,
    shipMode: "",
    OblReceived: "",
    placeOfReceiptETD: null,
    it_Issued_Location: null,
    office: "",
    carrier: "",
    agentRefNo: "",
    consignee: "",
    salesType: "",
    cyLocation: "",
    portofDischarge: "",
    finalDestination: "",
    ATA: null,
    serviceTerm1: "",
    serviceterm2: "",
    receivedDate: null,
    return_Location: "",
    received_Date: null,
    blType: "",
    blAcctCarrier: "",
    subBLNo: "",
    notify: "",
    cargoType: "",
    cfsLocation: "",
    ETA: null,
    finalETA: null,
    ETB: null,
    containerQty: "",
    businessRefer: "",
    it_No: "",
  });


  const handleFieldChange = (fieldName, value) => {

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const [hbldata, setHblData] = useState({
    hblNo: "",
    hblquoationNo: "",
    hblCustomer: "",
    hblSales: "",
    hblCustomsBroker: "",
    hblPOD: "",
    hblDL: "",
    hblRailDate: null,
    hblGODate: null,
    hblExpressBL: "",
    hblCheckbox: "",
    hblBRby: "",
    hblOBLDate: null,
    hblFreightReleased: null,
    hblANSent: null,
    hblAMSNo: "",
    hblShipper: "",
    hblBillto: "",
    hblFwdAgent: "",
    hblTrucker: "",
    hblPODETA: null,
    hblShipMode: "",
    hblITNo: "",
    hblExpDate: null,
    hblSaleType: "",
    hblCRelDate: null,
    hblEntryNo: "",
    hblRelBy: "",
    hblDoSentDate: null,
    hblIFSNo: "",
    hblConsignee: "",
    hblSubBLNo: "",
    hblISFMDate: null,
    hblcycfsloc: "",
    hblFinalDest: "",
    hblFreight: "",
    hblITDate: null,
    hblIncoTerms: "",
    hblST1: "",
    hblST2: "",
    hblEntryDoc: null,
    hblRevDate: null,
    hblDoorDeli: null,
    hblNotify: "",
    hblOp: "",
    hblAvailable: null,
    hblfinalETA: null,
    hblLFD: null,
    hblITIssueLoc: "",
    hblCargoType: "",
    hblContainerQty: "",
    hblLCNo: "",
    hblGroupComm: "",
    hblShipType: "",
    hblLineCode: "",
    hblSCNo: "",
    hblNameAcc: "",
  });

  const handleHblFieldChange = (fieldName, value) => {

    setHblData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    try {

      const Data = {
        formData: formData,
        hbldata: hbldata,
      }

      const response = await axios.post("http://localhost:4000/new-shipment", Data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Data submitted successfully:", response.data);
      // You can add any success handling here
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle the error as neeeded
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
  const formItemStyle1 = { marginBottom: '22px' };
  const formItemStyle2 = { marginBottom: '40px' };
  const formItemStyle3 = { marginBottom: '78px' };
  const formItemStyle4 = { marginBottom: '185px' };
  const formItemStyle5 = { marginBottom: '-10px' };

  const inputstyle = { innerHeight: '15px' };
  const [placement, SetPlacement] = useState('topLeft');
  const [oblReceivedChecked, setOblReceivedChecked] = useState(true);

  const [receivedCheckedate, setReceivedCheckedate] = useState(false);
  const [railcheck, setRailCheck] = useState(false);
  const [hoblreceivedcheck, setHoblReceivedcheck] = useState(false);
  const [freightreceivedcheck, setfreightreceivedcheck] = useState(false);
  const [ansentcheck, setAnSentCheck] = useState(false);
  const [dosentcheck, setDoSentCheck] = useState(false);
  const [receiveddatecheck, setReceivedDateCheck] = useState(false);


  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (value) => {
    setSelectedOption(value); // Update the selected option when an option is chosen
  };

  return (
    <div className='newshipment-container' >
      <div>
        <Row >
          <Col span={20}>
            <>
              <Collapse activeKey={ismemoOpen ? '1' : ''} expandIconPosition={expandIconPosition}>
                <Panel

                  style={{ backgroundColor: '#555555', color: 'white' }}
                  header={<span className="white-text">MB/L Information</span>}
                  key="1"
                  onClick={handlememoToggle}>
                  <Col span={24} style={{ padding: '0px' }}>
                    <div onClick={handleSecondMemoContentClick} >
                      <Row>
                        <Col span={6} >
                          <div >
                            <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                              <Form.Item label="File No." style={formItemStyle}>
                                <Input value={formData.fileNo} onChange={(e) => handleFieldChange("fileNo", e.target.value)} />
                              </Form.Item>
                              <Form.Item label="Post Date" style={formItemStyle}>
                                <Input className='post-date' value={formData.postDate} onChange={(e) => handleFieldChange("postDate", e.target.value)} />
                              </Form.Item>
                              <Form.Item label={<span className="input-label">Forwarding<br /> Agent</span>} style={formItemStyle}>
                                <Select className='custom-dropdownn' value={formData.forwardingAgent} onChange={(value) => handleFieldChange("forwardingAgent", value)} style={{ width: '100%', color: 'black' }}  >
                                  <Option style={{ height: '24px' }} value="option1">Option 1</Option>
                                  <Option style={{ height: '24px' }} value="option2">Option 2</Option>
                                  <Option style={{ height: '24px' }} value="option3">Option 3</Option>
                                  {/* Add more options as needed */}
                                </Select>
                              </Form.Item>
                              <Form.Item label="OP" style={formItemStyle}>
                                <Select style={{ height: '24px' }} value={formData.op} onChange={(value) => handleFieldChange("op", value)}>
                                  <Option value="option1">Option 1</Option>
                                  <Option value="option2">Option 2</Option>
                                  <Option value="option3">Option 3</Option>
                                  {/* Add more options as needed */}
                                </Select>
                              </Form.Item>
                              {showAdditionalInputs && (
                                <>
                                  <Form.Item label={<span className='input-label'>Customer<br /> Ref.No</span>} >
                                    <Input value={formData.customer_RefNo} onChange={(e) => handleFieldChange("customer_RefNo", e.target.value)} />
                                  </Form.Item>
                                  <Form.Item label="Customer" style={formItemStyle}>
                                    <Select value={formData.customer} onChange={(value) => handleFieldChange("customer", value)}>
                                      <Option value="option1">Option 1</Option>
                                      <Option value="option2">Option 2</Option>
                                      <Option value="option3">Option 3</Option>

                                    </Select>
                                  </Form.Item>
                                  <Form.Item label="Sales" style={formItemStyle2}>
                                    <Select value={formData.sales} onChange={(value) => handleFieldChange("sales", value)}>
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
                              <Form.Item label={<span className='input-label'>Port of <br />Loading</span>} style={formItemStyle}>
                                <Select value={formData.port_of_Loading} onChange={(value) => handleFieldChange("port_of_Loading", value)}>
                                  <Option value="option1">Option 1</Option>
                                  <Option value="option2">Option 2</Option>
                                  <Option value="option3">Option 3</Option>
                                  {/* Add more options as needed */}
                                </Select>
                              </Form.Item>
                              <Form.Item label={<span className='input-label'>Place of <br />Delivery (DEL)</span>} style={formItemStyle3}>

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
                              <Form.Item label="Latest Gate In" style={formItemStyle}>
                                <DatePicker value={formData.latestGateIn} onChange={(date) => handleFieldChange('latestGateIn', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                              </Form.Item>

                              <br />
                              <br />
                              <div>
                                <Form.Item label="More" style={formItemStyle}>
                                  <button onClick={toggleInput}>
                                    {showPlusInput ? '-' : '+'}
                                  </button>
                                </Form.Item>
                                <br />
                                {showPlusInput &&
                                  <>
                                    <Form.Item label={<span className='input-label'>Place of<br /> Receipt</span>} style={formItemStyle}>
                                      <Select value={formData.place_of_Receipt} onChange={(value) => handleFieldChange("place_of_Receipt", value)} >
                                        <Option value="option1">Option 1</Option>
                                        <Option value="option2">Option 2</Option>
                                        <Option value="option3">Option 3</Option>
                                        {/* Add more options as needed */}
                                      </Select>
                                    </Form.Item>
                                    <Form.Item label="IT Date" style={formItemStyle}>
                                      <DatePicker value={formData.it_Date} onChange={(date) => handleFieldChange('it_Date', date)} placement={placement} style={{ width: '100%', height: '24px' }} />
                                    </Form.Item>
                                  </>


                                }

                              </div>

                            </Form>
                          </div>


                        </Col>
                        <Col span={6}>
                          <div>
                            <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                              <Form.Item label={<span className="required-label">MB/L No.</span>} style={formItemStyle}>
                                <Input onClick={() => setIsAnyInputClicked(true)} value={formData.mblNo} onChange={(e) => handleFieldChange("mblNo", e.target.value)} />
                              </Form.Item>
                              <Form.Item label={<span className='input-label'>Oversea <br />Agent</span>} style={formItemStyle}>
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
                              <Form.Item label={<span className='input-label'>Carrier <br />Contact No</span>} style={formItemStyle}>
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
                              <Form.Item label={<span className='input-label'>Place of Delivery <br />ETA</span>} style={formItemStyle}>
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
                              <Form.Item label={<span className='input-label'>OB/L <br />Received</span>} style={formItemStyle1}>
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
                                <br />
                                <br />
                                <br />

                              </Form.Item>


                              <div>
                                {showPlusInput &&
                                  <>
                                    <Form.Item label={<span className='input-label'>Place of<br /> Receipt ETD</span>} style={formItemStyle}>
                                      <DatePicker value={formData.placeOfReceiptETD} onChange={(date) => handleFieldChange('placeOfReceiptETD', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                    </Form.Item>
                                    <Form.Item label={<span className='input-label'>IT Issued<br /> Location</span>} style={formItemStyle}>
                                      <Select value={formData.it_Issued_Location} onChange={(value) => handleFieldChange("it_Issued_Date", value)} >
                                        <Option value="option1">Option 1</Option>
                                        <Option value="option2">Option 2</Option>
                                        <Option value="option3">Option 3</Option>
                                        {/* Add more options as needed */}
                                      </Select>
                                    </Form.Item>

                                  </>


                                }
                              </div>
                            </Form>
                          </div>

                        </Col>
                        <Col span={6}>
                          <div>
                            <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                              <Form.Item label={<span className="required-label">Office</span>} style={formItemStyle}>
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
                              <Form.Item label={<span className='input-label'>Port of <br />Discharge</span>} style={formItemStyle}>
                                <Select value={formData.portofDischarge} onChange={(value) => handleFieldChange("portofDischarge", value)} >
                                  <Option value="option1">Option 1</Option>
                                  <Option value="option2">Option 2</Option>
                                  <Option value="option3">Option 3</Option>
                                  {/* Add more options as needed */}
                                </Select>
                              </Form.Item>
                              <Form.Item label={<span className='input-label'>Final<br />Destination</span>} style={formItemStyle}>
                                <Select value={formData.finalDestination} onChange={(value) => handleFieldChange("finalDestination", value)} >
                                  <Option value="option1">Option 1</Option>
                                  <Option value="option2">Option 2</Option>
                                  <Option value="option3">Option 3</Option>
                                  {/* Add more options as needed */}
                                </Select>
                              </Form.Item>
                              <Form.Item label="ATA" style={formItemStyle2}>
                                <DatePicker value={formData.ATA} onChange={(date) => handleFieldChange('ATA', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                              </Form.Item>
                              <Form.Item label="*Service Term" style={formItemStyle}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <Select style={{ marginBottom: '1px' }} value={formData.serviceTerm1} onChange={(value) => handleFieldChange("serviceTerm1", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                  <p style={{ marginBottom: '2px' }} >~</p>
                                  <Select style={{ marginBottom: '2px' }} value={formData.serviceterm2} onChange={(value) => handleFieldChange("serviceTerm2", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </div>

                              </Form.Item>
                              <Form.Item label={<span className='input-label'>Released<br />Date</span>} style={{ marginBottom: '35px' }}>
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
                                <br />
                                <br />

                              </Form.Item>

                              <div>
                                {showPlusInput &&
                                  <>

                                    <Form.Item label={<span className='input-label'>Return<br />Location</span>} style={formItemStyle}>
                                      <Select value={formData.return_Location} onChange={(value) => handleFieldChange("return_Location", value)}>
                                        <Option value="option1">Option 1</Option>
                                        <Option value="option2">Option 2</Option>
                                        <Option value="option3">Option 3</Option>
                                        {/* Add more options as needed */}
                                      </Select>
                                    </Form.Item>
                                    <Form.Item label="E-Commerce" style={formItemStyle}>
                                      <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Checkbox

                                          value={formData.receivedDate}
                                          onChange={(e) => handleFieldChange("receivedDate", e.target.checked)}
                                        />

                                      </div>
                                    </Form.Item>
                                  </>


                                }
                              </div>
                            </Form>
                          </div>

                        </Col>
                        <Col span={6}>

                          <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                            <div>
                              <Form.Item label="B/L Type " style={formItemStyle}>
                                <Select value={formData.blType} onChange={(value) => handleFieldChange("blType", value)} >
                                  <CustomSelect options={options} />
                                </Select>
                              </Form.Item>
                              <Form.Item label={<span className='input-label'>B/L Acct.<br />Carrier</span>} style={formItemStyle}>
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
                              <Form.Item label={<span className="required-label">ETA</span>} style={formItemStyle}>
                                <DatePicker value={formData.ETA} onChange={(date) => handleFieldChange('ETA', date)} onClick={() => setIsAnyInputClicked(true)} style={{ width: '100%', height: '24px' }} placement={placement} />
                              </Form.Item>
                              <Form.Item label="Final ETA " style={formItemStyle}>
                                <DatePicker value={formData.finalETA} onChange={(date) => handleFieldChange('finalETA', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                              </Form.Item>
                              <Form.Item label="ETB" style={formItemStyle2}>
                                <DatePicker value={formData.ETB} onChange={(date) => handleFieldChange('ETB', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                              </Form.Item>

                              <Form.Item label={<span className='input-label'>Container<br />/Qty</span>} style={formItemStyle}>
                                <Input value={formData.containerQty} onChange={(e) => handleFieldChange("containerQty", e.target.value)} />
                              </Form.Item>
                              <Form.Item label={<span className='input-label'>Business<br />Referred By</span>} style={{ marginBottom: "70px" }}>
                                <Select value={formData.businessRefer} onChange={(value) => handleFieldChange("businessRefer", value)} >
                                  <Option value="option1">Option 1</Option>
                                  <Option value="option2">Option 2</Option>
                                  <Option value="option3">Option 3</Option>
                                  {/* Add more options as needed */}
                                </Select>
                              </Form.Item>
                              <br />
                              <br />
                            </div>
                            <div>
                              {showPlusInput &&
                                <>
                                  <Form.Item label="IT No " style={formItemStyle1}>
                                    <Input value={formData.it_No} onChange={(e) => handleFieldChange("it_No", e.target.value)} />
                                  </Form.Item>

                                </>


                              }
                            </div>
                          </Form>




                        </Col>
                      </Row>
                    </div>
                    <Collapse activeKey={isSecondMemoOpen ? '1' : ''} expandIconPosition={expandIconPosition}>
                      <Panel style={{ backgroundColor: ' #e0e0e0' }} header="Memo" key="1" onClick={handleSecondMemoToggle}>
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
                                <TextArea style={{ backgroundColor: '#e7e7e7', minHeight: '150px', marginLeft:'25px' }} />
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
                      marginTop: "20px",
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
            <Button className='hblbutton' style={{ height: '40px', marginLeft: '20px', marginTop: '10px' }} onClick={handleAddhbl}>+ Add HB/L</Button>
          </Col>
        </Row>
      </div>
      {addhbl && (
        <div>
          <Row style={{ minHeight: '200vh !important' }}>
            <Col span={20}>
              <>
                <Collapse activeKey={ismemoOpen1 ? '1' : ''} expandIconPosition={expandIconPosition}>
                  <Panel
                    style={{ backgroundColor: '#f3c200', color: "white" }}
                    onClick={handlememoToggle}
                    header={
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: "white" }}>
                        <span className='white-text'>HB/L Information</span>
                        <FontAwesomeIcon
                          icon={faClose}
                          style={{ cursor: 'pointer', marginRight:'10px' }}
                          onClick={handlecloseAddhbl}
                        />
                      </div>
                    }
                    key="1"
                  >
                    <Col span={24} style={{ padding: '10px' }}>
                      <div onClick={handleSecondMemoContentClick} >
                        <Row>
                          <Col span={6} >
                            <div >
                              <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                                <Form.Item label="* HB/L No." style={formItemStyle}>
                                  <Input value={hbldata.hblNo} onChange={(e) => handleHblFieldChange("hblNo", e.target.value)} />
                                </Form.Item>
                                <Form.Item label="Quotation No" style={formItemStyle}>
                                  <Select style={{ height: '24px' }} value={hbldata.hblquoationNo} onChange={(value) => handleHblFieldChange("hblquoationNo", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Customer" style={formItemStyle}>
                                  <Select value={hbldata.hblCustomer} onChange={(value) => handleHblFieldChange("hblCustomer", value)}  >
                                    <Option style={{ height: '24px' }} value="option1">Option 1</Option>
                                    <Option style={{ height: '24px' }} value="option2">Option 2</Option>
                                    <Option style={{ height: '24px' }} value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Sales" style={formItemStyle2}>
                                  <Select style={{ height: '24px' }} value={hbldata.hblSales} onChange={(value) => handleHblFieldChange("hblSales", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Customs Broker" style={formItemStyle}>
                                  <Select value={hbldata.hblCustomsBroker} onChange={(value) => handleHblFieldChange("hblCustomsBroker", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label={<span className='input-label'>Place of<br />Delivery(DEL)</span>} style={formItemStyle}>
                                  <Select value={hbldata.hblPOD} onChange={(value) => handleHblFieldChange("hblPOD", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                <Form.Item label={<span className='input-label'>Delivery<br />Location</span>} style={formItemStyle}>
                                  <Select value={hbldata.hblDL} onChange={(value) => handleHblFieldChange("hblDL", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Rail" style={formItemStyle}>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                      checked={railcheck}
                                      onChange={(e) => setRailCheck(e.target.checked)}
                                    />
                                    <span style={{ marginLeft: '10px', flex: 1 }}>
                                      <DatePicker value={hbldata.hblRailDate} onChange={(date) => handleHblFieldChange('hblRailDate', date)}
                                        style={{ width: '100%', height: '24px' }}
                                        disabled={!railcheck}
                                      />
                                    </span>
                                  </div>
                                </Form.Item>
                                <Form.Item label="G.O Date" style={formItemStyle2}>
                                  <DatePicker value={hbldata.hblGODate} onChange={(date) => handleHblFieldChange('hblGODate', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="Express B/L" style={formItemStyle}>
                                  <Radio.Group value={hbldata.hblExpressBL} onChange={(e) => handleHblFieldChange("hblExpressBL", e.target.value)}>
                                    <Radio value="yes">Yes</Radio>
                                    <Radio value="no">No</Radio>
                                  </Radio.Group>
                                </Form.Item>
                                {/* <Form.Item label="" style={formItemStyle}>
                          <Checkbox.Group value={hbldata.hblCheckbox} onChange={(values) => handleHblFieldChange("hblCheckbox", values)}>
                            <div style={{ fontSize: "10px", display:"flex" }}>
                              <div>
                                <Checkbox value="option1">Door Move</Checkbox>
                              </div>
                              <div>
                                <Checkbox value="option2">C.Clearance</Checkbox>
                              </div>
                              <div>
                                <Checkbox value="option3">C.Hold</Checkbox>
                              </div>
                            </div>
                          </Checkbox.Group>
                        </Form.Item> */}
                        <div className='hbl-checkbox' style={{display:'flex', justifyContent:'center', marginRight:'0', marginLeft:'10%' }}>
                                <Form.Item className='door-move' label="Door Move" style={formItemStyle}>
                                  <Checkbox onChange={handleCheckboxChange} />
                                </Form.Item>
                                <Form.Item className='clearance' label="C.Clearance" style={formItemStyle}>
                                  <Checkbox onChange={handleCheckboxChange} />
                                </Form.Item>
                                <Form.Item className='c-hold' label="C.Hold" style={formItemStyle}>
                                  <Checkbox onChange={handleCheckboxChange} />
                                </Form.Item></div>
                                <Form.Item label={<span className='input-label'>Business<br />Referred By</span>} style={formItemStyle}>
                                  <Select value={hbldata.hblBRby} onChange={(value) => handleHblFieldChange("hblBRby", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="OB/L Received" style={formItemStyle}>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                      checked={hoblreceivedcheck}
                                      onChange={(e) => setHoblReceivedcheck(e.target.checked)}
                                    />
                                    <span style={{ marginLeft: '10px', flex: 1 }}>
                                      <DatePicker value={hbldata.hblOBLDate} onChange={(date) => handleHblFieldChange('hblOBLDate', date)}
                                        style={{ width: '100%', height: '24px' }}
                                        disabled={!hoblreceivedcheck}
                                      />
                                    </span>
                                  </div>
                                </Form.Item>
                                <Form.Item label={<span className='input-label'>Freight<br />Released</span>} style={formItemStyle}>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                      checked={freightreceivedcheck}
                                      onChange={(e) => setfreightreceivedcheck(e.target.checked)}
                                    />
                                    <span style={{ marginLeft: '10px', flex: 1 }}>
                                      <DatePicker value={hbldata.hblFreightReleased} onChange={(date) => handleHblFieldChange('hblFreightReleased', date)}
                                        style={{ width: '100%', height: '24px' }}
                                        disabled={!freightreceivedcheck}
                                      />
                                    </span>
                                  </div>
                                </Form.Item>
                                <Form.Item label="AN Sent Date" style={formItemStyle2}>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                      checked={ansentcheck}
                                      onChange={(e) => setAnSentCheck(e.target.checked)}
                                    />
                                    <span style={{ marginLeft: '10px', flex: 1 }}>
                                      <DatePicker value={hbldata.hblANSent} onChange={(date) => handleHblFieldChange('hblANSent', date)}
                                        style={{ width: '100%', height: '24px' }}
                                        disabled={!ansentcheck}
                                      />
                                    </span>
                                  </div>
                                </Form.Item>
                                {showHBLPlusInput && (
                                  <>
                                    <Form.Item label="L/C No" style={formItemStyle}>
                                      <Input value={hbldata.hblLCNo} onChange={(e) => handleHblFieldChange("hblLCNo", e.target.value)} />
                                    </Form.Item>
                                    <Form.Item label="Group Comm" style={formItemStyle}>
                                      <Input value={hbldata.hblGroupComm} onChange={(e) => handleHblFieldChange("hblGroupComm", e.target.value)} />
                                    </Form.Item>
                                  </>
                                )}
                              </Form>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div>
                              <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                                <Form.Item label="AMS No" style={formItemStyle}>
                                  <Input onClick={() => setIsAnyInputClicked(true)} value={hbldata.hblAMSNo} onChange={(e) => handleHblFieldChange("hblAMSNo", e.target.value)} />
                                </Form.Item>
                                <Form.Item label="Shipper" style={formItemStyle}>
                                  <Select value={hbldata.hblShipper} onChange={(value) => handleHblFieldChange("hblShipper", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Bill To" style={formItemStyle}>
                                  <Select value={hbldata.hblBillto} onChange={(value) => handleHblFieldChange("hblBillto", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label={<span className='input-label'>Forwarding <br />Agent</span>} style={formItemStyle2}>
                                  <Select value={hbldata.hblFwdAgent} onChange={(value) => handleHblFieldChange("hblFwdAgent", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Trucker" style={formItemStyle}>
                                  <Select value={hbldata.hblTrucker} onChange={(value) => handleHblFieldChange("hblTrucker", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>

                                  </Select>
                                </Form.Item>
                                <Form.Item label={<span className='input-label'>Place of<br />Delivery ETA</span>} style={formItemStyle}>
                                  <DatePicker value={hbldata.hblPODETA} onChange={(date) => handleHblFieldChange('hblPODETA', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="Ship Mode" style={formItemStyle}>
                                  <Select value={hbldata.hblShipMode} onChange={(value) => handleHblFieldChange("hblShipMode", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label="IT No" style={formItemStyle}>
                                  <Input value={hbldata.hblITNo} onChange={(e) => handleHblFieldChange("hblITNo", e.target.value)} />
                                </Form.Item>
                                <Form.Item label="Expiry Date" style={formItemStyle2}>
                                  <DatePicker value={hbldata.hblExpDate} onChange={(date) => handleHblFieldChange('hblExpDate', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="Sale Type" style={formItemStyle}>
                                  <Select value={hbldata.hblSaleType} onChange={(value) => handleHblFieldChange("hblSaleType", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label={<span className='input-label'>C.Released<br />Date</span>} style={formItemStyle}>
                                  <DatePicker value={hbldata.hblCRelDate} onChange={(date) => handleHblFieldChange('hblCRelDate', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="Entry No" style={formItemStyle}>
                                  <Input value={hbldata.hblEntryNo} onChange={(e) => handleHblFieldChange("hblEntryNo", e.target.value)} />
                                </Form.Item>
                                <Form.Item label="ROR" style={formItemStyle}>
                                  <Checkbox onChange={handleCheckboxChange} />
                                </Form.Item>
                                <Form.Item label="Released By" style={formItemStyle}>
                                  <Select value={hbldata.hblRelBy} onChange={(value) => handleHblFieldChange("hblRelBy", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label="DO Sent Date" style={formItemStyle2}>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                      checked={dosentcheck}
                                      onChange={(e) => setDoSentCheck(e.target.checked)}
                                    />
                                    <span style={{ marginLeft: '10px', flex: 1 }}>
                                      <DatePicker value={hbldata.hblDoSentDate} onChange={(date) => handleHblFieldChange('hblDoSentDate', date)}
                                        style={{ width: '100%', height: '24px' }}
                                        disabled={!dosentcheck}
                                      />
                                    </span>
                                  </div>
                                </Form.Item>
                                {showHBLPlusInput && (<>
                                  <Form.Item label="Ship Type" style={formItemStyle}>
                                    <Select value={hbldata.hblShipType} onChange={(value) => handleHblFieldChange("hblShipType", value)}>
                                      <Option value="option1">Option 1</Option>
                                      <Option value="option2">Option 2</Option>
                                      <Option value="option3">Option 3</Option>
                                    </Select>
                                  </Form.Item>
                                  <Form.Item label="Line Code" style={formItemStyle}>
                                    <Input value={hbldata.hblLineCode} onChange={(e) => handleHblFieldChange("hblLineCode", e.target.value)} />
                                  </Form.Item>
                                </>)}
                              </Form>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div>
                              <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                                <Form.Item label="IFS No" style={formItemStyle}>
                                  <Input value={hbldata.hblIFSNo} onChange={(e) => handleHblFieldChange("hblIFSNo", e.target.value)} />
                                </Form.Item>
                                <Form.Item label="Consignee" style={formItemStyle}>
                                  <Select value={hbldata.hblConsignee} onChange={(value) => handleHblFieldChange("hblConsignee", value)}>
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Sub B/L No" style={formItemStyle}>
                                  <Input value={hbldata.hblSubBLNo} onChange={(e) => handleHblFieldChange("hblSubBLNo", e.target.value)} />
                                </Form.Item>
                                <Form.Item label={<span className='input-label'>ISF Matched<br />Date</span>} style={formItemStyle2}>
                                  <DatePicker value={hbldata.hblISFMDate} onChange={(date) => handleHblFieldChange('hblISFMDate', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="CY/CFS Location" style={formItemStyle}>
                                  <Select value={hbldata.hblcycfsloc} onChange={(value) => handleHblFieldChange("hblcycfsloc", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label={<span className='input-label'>Final<br />Destination</span>} style={formItemStyle}>
                                  <Select value={hbldata.hblFinalDest} onChange={(value) => handleHblFieldChange("hblFinalDest", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Freight" style={formItemStyle}>
                                  <Select value={hbldata.hblFreight} onChange={(value) => handleHblFieldChange("hblFreight", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="IT Date" style={formItemStyle3}>
                                  <DatePicker value={hbldata.hblITDate} onChange={(date) => handleHblFieldChange('hblITDate', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="Incoterms" style={formItemStyle}>
                                  <Select value={hbldata.hblIncoTerms} onChange={(value) => handleHblFieldChange("hblIncoTerms", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="*Service Term" style={formItemStyle}>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Select value={hbldata.hblST1} onChange={(value) => handleHblFieldChange("hblST1", value)} >
                                      <Option value="option1">Option 1</Option>
                                      <Option value="option2">Option 2</Option>
                                      <Option value="option3">Option 3</Option>
                                      {/* Add more options as needed */}
                                    </Select>
                                    <p  >~</p>
                                    <Select value={hbldata.hblST2} onChange={(value) => handleHblFieldChange("hblST2", value)}>
                                      <Option value="option1">Option 1</Option>
                                      <Option value="option2">Option 2</Option>
                                      <Option value="option3">Option 3</Option>
                                      {/* Add more options as needed */}
                                    </Select>
                                  </div>
                                </Form.Item>
                                <Form.Item label="Entry DOC Sent" style={formItemStyle}>
                                  <DatePicker value={hbldata.hblEntryDoc} onChange={(date) => handleHblFieldChange('hblEntryDoc', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label=" Received Date" style={formItemStyle}>
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox
                                      checked={receiveddatecheck}
                                      onChange={(e) => setReceivedDateCheck(e.target.checked)}
                                    />
                                    <span style={{ marginLeft: '10px', flex: 1 }}>
                                      <DatePicker value={hbldata.hblRevDate} onChange={(date) => handleHblFieldChange('hblRevDate', date)}
                                        style={{ width: '100%', height: '24px' }}
                                        disabled={!receiveddatecheck}
                                      />
                                    </span>
                                  </div>
                                </Form.Item>
                                <Form.Item label="Door Delivered" style={formItemStyle}>
                                  <DatePicker value={hbldata.hblDoorDeli} onChange={(date) => handleHblFieldChange('hblDoorDeli', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="More" style={formItemStyle1}>
                                  <button onClick={hbltoggleInput}>
                                    {showHBLPlusInput ? '-' : '+'}
                                  </button>
                                </Form.Item>
                                {showHBLPlusInput && (
                                  <>
                                    <Form.Item label="S/C No" style={formItemStyle}>
                                      <Input value={hbldata.hblSCNo} onChange={(e) => handleHblFieldChange("hblSCNo", e.target.value)} />
                                    </Form.Item>
                                    <Form.Item label="E-Commerce" style={formItemStyle}>
                                      <Checkbox onChange={handleCheckboxChange} />
                                    </Form.Item>
                                  </>
                                )}
                              </Form>
                            </div>
                          </Col>
                          <Col span={6}>
                            <div>
                              <Form labelCol={{ span: 7 }} wrapperCol={{ span: 16 }}>
                                <Form.Item label={<span className='input-label'>ISF Filling<br />By 3rd Party</span>} style={formItemStyle}>
                                  <Checkbox onChange={handleCheckboxChange} />
                                </Form.Item>
                                <Form.Item label="Notify" style={formItemStyle}>
                                  <Select value={hbldata.hblNotify} onChange={(value) => handleHblFieldChange("hblNotify", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Op" style={formItemStyle3}>
                                  <Select value={hbldata.hblOp} onChange={(value) => handleHblFieldChange("hblOp", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Available" style={formItemStyle}>
                                  <DatePicker value={hbldata.hblAvailable} onChange={(date) => handleHblFieldChange('hblAvailable', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="Final ETA" style={formItemStyle}>
                                  <DatePicker value={hbldata.hblfinalETA} onChange={(date) => handleHblFieldChange('hblFinalETA', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                <Form.Item label="LFD" style={formItemStyle}>
                                  <DatePicker value={hbldata.hblLFD} onChange={(date) => handleHblFieldChange('hblLFD', date)} style={{ width: '100%', height: '24px' }} placement={placement} />
                                </Form.Item>
                                {/* Add more additional inputs as needed */}
                                <Form.Item label={<span className='input-label'>IT Issued<br />Location</span>} style={formItemStyle3}>
                                  <Select value={hbldata.hblITIssueLoc} onChange={(value) => handleHblFieldChange("hblITIssueLoc", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Cargo Type" style={formItemStyle}>
                                  <Select value={hbldata.hblCargoType} onChange={(value) => handleHblFieldChange("hblCargoType", value)} >
                                    <Option value="option1">Option 1</Option>
                                    <Option value="option2">Option 2</Option>
                                    <Option value="option3">Option 3</Option>
                                    {/* Add more options as needed */}
                                  </Select>
                                </Form.Item>
                                <Form.Item label="Container/Qty " style={formItemStyle4}>
                                  <Input value={hbldata.hblContainerQty} onChange={(e) => handleHblFieldChange("hblContainerQty", e.target.value)} />
                                </Form.Item>
                                {showHBLPlusInput && (
                                  <>
                                    <Form.Item label="Name Account" style={formItemStyle}>
                                      <Input value={hbldata.hblNameAcc} onChange={(e) => handleHblFieldChange("hblNameAcc", e.target.value)} />
                                    </Form.Item>
                                    <Form.Item label="Customs Doc" style={formItemStyle}>
                                      <Checkbox onChange={handleCheckboxChange} />
                                    </Form.Item>
                                  </>
                                )}
                              </Form>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Collapse activeKey={isSecondMemoOpen ? '1' : ''} expandIconPosition={expandIconPosition}>
                        <Panel style={{ backgroundColor: '#E0E0E0' }} header="Memo" key="1" onClick={handleSecondMemoToggle}>
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
                                  <TextArea style={{ backgroundColor: '#e7e7e7', minHeight: '150px', marginLeft:'25px' }} />
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
                        marginTop: "20px",
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
          </Row>
        </div>
      )}
    </div>

  )
}
