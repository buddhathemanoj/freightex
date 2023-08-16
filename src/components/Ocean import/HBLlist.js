import { useState } from 'react';
import React  from 'react';
import { Link } from 'react-router-dom';
import {PlusOutlined,DeleteOutlined,CopyOutlined} from '@ant-design/icons';
import { Table, Button, Modal, Checkbox,Input } from 'antd';
import data from '../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import './Shipmentlist.css'

export const HBLlist = () => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);

    const [filterVisible, setFilterVisible] = useState(false);
    const [filteredData, setFilteredData] = useState(data);
    const [filterName, setFilterName] = useState('');
    const [filterAge, setFilterAge] = useState('');
   
    const [configVisible, setConfigVisible] = useState(false);
    
    const handleSelectAllChange = (e) => {
      const newSelectAllChecked = !selectAllChecked; // Toggle the selection status
        
      setSelectAllChecked(newSelectAllChecked);
        
      // Update the selection status of all items
      const updatedData = filteredData.map(item => ({
        ...item,
        selected: newSelectAllChecked,
      }));
      setFilteredData(updatedData);
    };

    const [iconStatus, setIconStatus] = useState({});
    const [lockedStatus, setLockedStatus] = useState({});

    const handleStatusChange = (key, newStatus) => {
      setIconStatus(prevIconStatus => ({
        ...prevIconStatus,
        [key]: newStatus,
      }));
    };

    const handleLockChange = (key, newLockStatus) => {
      setLockedStatus(prevLockedStatus => ({
        ...prevLockedStatus,
        [key]: newLockStatus,
      }));
    };
    
    
  const columns = [
 
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
    sorter: true,
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
  },
  {
    title: 'Column 9',
    dataIndex: 'address',
    key: '9',
  },
  {
    title: 'Column 10',
    dataIndex: 'address',
    key: '10',
  },
  {
    title: 'Column 11',
    dataIndex: 'address',
    key: '11',
  },
  {
    title: 'Column 12',
    dataIndex: 'address',
    key: '12',
  },
  {
    title: 'Column 13',
    dataIndex: 'address',
    key: '13',
  },
  {
    title: 'Column 15',
    dataIndex: 'address',
    key: '15',
  },
  {
    title: 'Column 16',
    dataIndex: 'address',
    key: '16',
  },
  {
    title: 'Column 17',
    dataIndex: 'address',
    key: '17',
  },
  {
    title: 'Column 18',
    dataIndex: 'address',
    key: '18',
  },
  {
    title: 'Column 19',
    dataIndex: 'address',
    key: '19',
  },
  {
    title: 'Column 20',
    dataIndex: 'address',
    key: '20',
  },
  {
    title: 'Column 21',
    dataIndex: 'address',
    key: '21',
  },
  {
    title: 'Column 22',
    dataIndex: 'address',
    key: '22',
  },
  {
    title: 'Status',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: (_, record) => (
      <div>
        {iconStatus[record.key] === 'tick' ? (
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: 'green', cursor: 'pointer', marginRight:"15px", fontSize:"20px"}}
            onClick={() => handleStatusChange(record.key, 'wrong')}
          />
        ) : (
          <FontAwesomeIcon
            icon={faTimes}
            style={{ color: 'red', cursor: 'pointer', marginRight:"15px", fontSize:"20px" }}
            onClick={() => handleStatusChange(record.key, 'tick')}
          />
        )}
        {lockedStatus[record.key] ? (
          <FontAwesomeIcon
            icon={faLock}
            style={{ color: 'gray', marginLeft: '10px', cursor: 'pointer', fontSize:"20px" }}
            onClick={() => handleLockChange(record.key, false)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faUnlock}
            style={{ color: 'blue', marginLeft: '10px', cursor: 'pointer', fontSize:"20px" }}
            onClick={() => handleLockChange(record.key, true)}
          />
        )}
      </div>
    ),
  },  
];
const [visibleColumns, setVisibleColumns] = useState(columns.map(column => column.key));


const handleRowSelect = (record, selected) => {
  const updatedData = filteredData.map(item => 
    item.key === record.key ? { ...item, selected } : item
  );
  setFilteredData(updatedData);
};
const handleSelectAllRows = (selected, changedRows) => {
  const updatedData = filteredData.map(item => ({
    ...item,
    selected: selected && changedRows.some(changedItem => changedItem.key === item.key),
  }));
  setFilteredData(updatedData);
};


    const handleColumnConfigChange = checkedColumns => {
      setVisibleColumns(checkedColumns);
      setConfigVisible(true);
    };
  
    const openConfigModal = () => {
      setConfigVisible(true);
    };
  
    const configModalContent = (
      <div>
        <h2>Column Configuration</h2>
        <Checkbox.Group
          options={columns.map(column => ({ label: column.title, value: column.key }))}
          value={visibleColumns}
          onChange={handleColumnConfigChange}
        />
      </div>
    );
  
  
  
    const handleSearch = () => {
        const filtered = data.filter(item => {
          const nameFilter = !filterName || item.name.toLowerCase().includes(filterName.toLowerCase());
          const ageFilter = !filterAge || item.age.toString().includes(filterAge);
          return nameFilter && ageFilter;
        });
        setFilteredData(filtered);
      };
  
    const openFilterModal = () => {
      setFilterVisible(true);
    };
  
    const closeFilterModal = () => {
      setFilterVisible(false);
    };
  
    return (
      <div>
        <div style={{float:'right',gap:'10px'}}>
             <Button style={{backgroundColor:'green',color:'white',borderRadius:'0px'}} onClick={openFilterModal}>Filter</Button>
        <Button style={{backgroundColor:'green',color:'white',borderRadius:'0px'}} onClick={openConfigModal}>Config</Button>
        </div>
       <div>
       <Link to="/ocean-import/new-shipment">
        <Button
          style={{ backgroundColor: 'green', marginRight: '5px', color: 'white', fontWeight: '600', borderRadius: '0px' }}
        >
          <PlusOutlined />
        </Button>
      </Link>
         <Button style={{marginRight:'5px',borderRadius:'0px'}} ><DeleteOutlined/></Button>
        <Button  style={{marginRight:'5px',borderRadius:'0px'}}><CopyOutlined/></Button>
       </div>
        <Modal
        visible={filterVisible}
        onCancel={closeFilterModal}
        onOk={() => {
          handleSearch();
          closeFilterModal();
        }}
      >
        <h2>Filter Options</h2>
        <Input
         className="custom-input"
          placeholder="Filter by Name"
          value={filterName}
          onChange={e => setFilterName(e.target.value)}
        />
        <br/>
        <Input
         className="custom-input"
          placeholder="Filter by Age"
          value={filterAge}
          onChange={e => setFilterAge(e.target.value)}
        />
      </Modal>
        <Modal
        style={{width:'100%'}}
          visible={configVisible}
          onCancel={() => setConfigVisible(false)}
          onOk={() => setConfigVisible(false)}
        >
          {configModalContent}
        </Modal>
        <Table
                columns={columns.filter(column => visibleColumns.includes(column.key))}
                dataSource={filteredData}
                scroll={{
                    x: 2500,
                    y: 600,
                }}
                rowKey="key"
                rowSelection={{
                    selectedRowKeys: filteredData.filter(item => item.selected).map(item => item.key),
                    onSelect: (record, selected) => handleRowSelect(record, selected),
                    onSelectAll: (selected, selectedRows, changedRows) => handleSelectAllRows(selected, changedRows),
                }}
            />
      </div>
    );
  };
  
 

