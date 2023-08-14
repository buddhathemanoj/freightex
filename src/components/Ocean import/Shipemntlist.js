import { useState } from 'react';
import React  from 'react';
import {PlusOutlined,DeleteOutlined,CopyOutlined} from '@ant-design/icons';
import { Table, Button, Modal, Checkbox,Input } from 'antd';
const columns = [
    {
        title: <Checkbox/>,
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
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
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key: '4',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key: '5',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key: '6',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
  {
    key: '7',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];


const Shipmentlist = () => {
    const [visibleColumns, setVisibleColumns] = useState(columns.map(column => column.key));
    const [filterVisible, setFilterVisible] = useState(false);
    const [filteredData, setFilteredData] = useState(data);
    const [filterName, setFilterName] = useState('');
    const [filterAge, setFilterAge] = useState('');
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const [configVisible, setConfigVisible] = useState(false);
  
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
             <Button style={{backgroundColor:'green',color:'white'}} onClick={openFilterModal}>Filter</Button>
        <Button style={{backgroundColor:'green',color:'white'}} onClick={openConfigModal}>Config</Button>
        </div>
       <div>

        <Button  style={{backgroundColor:'green',marginRight:'5px'}} ><PlusOutlined/></Button>
        <Button style={{marginRight:'5px'}} ><DeleteOutlined/></Button>
        <Button  style={{marginRight:'5px'}}><CopyOutlined/></Button>
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
          placeholder="Filter by Name"
          value={filterName}
          onChange={e => setFilterName(e.target.value)}
        />
        <Input
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
            y: 300,
          }}
        />
      </div>
    );
  };
  
  export default Shipmentlist;

