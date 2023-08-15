import { useId, useRef, useState } from 'react';

import './Selectmenu.css';

import Label from '../Label/Label';
import Message from '../Message/Message';
import Option from './Option/Option';

export default function Selectmenu ({ label, initialValue = '', options = [], status = 'DEFAULT', message } = {}) {
  const id = useId();
  const selectmenuRef = useRef();

  const [value, setValue] = useState(initialValue);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleClearInput = () => {
    setValue('');
  };

  return <div className={`selectmenu-container ${status.toLowerCase()}`}>
    {value && <Label htmlFor={id}>{label}</Label>}
    <selectmenu id={id} ref={selectmenuRef} onInput={handleOnChange}>
      <button slot="button" behavior="button">
        {value && <span className="selected-value">{options.find(option => option.value === value).label}</span>}
        {!value && <span className="placeholder">{label}</span>}
        {value && <i className="fa fa-regular fa-circle-xmark clear-input-icon" onClick={handleClearInput}></i>}
        <i slot="marker" className="fa fa-angle-down"></i>
      </button>

      <div slot="listbox">
        <div popover="auto" behavior="listbox" className="listbox">
          <Option value="" selected={value === ''} hidden={true}></Option>
          {options.map(option => <Option key={option.value} label={option.label} value={option.value} description={option.description} selected={option.value === value} className={option.value === value ? 'selected' : ''}></Option>)}
        </div>
      </div>
    </selectmenu>
    <Message status={status}>{message}</Message>
  </div>;
}