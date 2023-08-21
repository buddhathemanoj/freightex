import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';

const SelectBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3', 'Another Option', 'More Options'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="select-bar">
      <Select className="select-button" onClick={toggleDropdown}>
        Select an Option
      </Select>
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-controls">
            <Input
              type="text"
              placeholder="Search options..."
              value={filterText}
              onChange={handleFilterChange}
              className="search-input"
            />
            <Button className="dropdown-button">Advance</Button>
            <Button className="dropdown-button">+</Button>
          </div>
          <div className="options-list">
            {filteredOptions.map((option, index) => (
              <div key={index} className="dropdown-option">
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectBar;
