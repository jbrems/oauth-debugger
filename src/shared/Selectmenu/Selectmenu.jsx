import { useId, useRef, useState } from 'react';

import './Selectmenu.css';

import Label from '../Label/Label';
import Message from '../Message/Message';

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
        <span className={`selected-value ${!value ? 'hidden' : ''}`} behavior="selected-value"></span>
        {!value && <span className="placeholder">{label}</span>}
        {value && <i className="fa fa-regular fa-circle-xmark clear-input-icon" onClick={handleClearInput}></i>}
        <i slot="marker" className="fa fa-angle-down"></i>
      </button>

      <option className="hidden" value="" selected={value === ''}></option>
      {options.map(option => <option key={option.value} value={option.value} selected={option.value === value}>{option.label}</option>)}
    </selectmenu>
    <Message status={status}>{message}</Message>
  </div>;
}