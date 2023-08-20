import { useEffect, useId, useRef, useState } from 'react';

import './Selectmenu.css';

import Label from '../Label/Label';
import Message from '../Message/Message';
import Option from './Option/Option';
import ClearInput from '../ClearInput/ClearInput';
import SaveValueToSessionStorage from '../SaveValueToSessionStorage/SaveValueToSessionStorage';

export default function Selectmenu ({ inputId, label, initialValue = '', options = [], status = 'DEFAULT', message, onChange = () => {} } = {}) {
  const id = useId();

  const [value, setValue] = useState(initialValue);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    forceUpdate(i => i + 1);
  };

  const handleClearInput = () => {
    setValue('');
  };

  return <div className={`selectmenu-container ${status.toLowerCase()}`}>
    {value && <Label htmlFor={id}>{label}</Label>}
    <selectmenu id={id} onInput={handleChange}>
      <button slot="button" behavior="button">
        {value && <span className="selected-value">{options.find(option => option.value === value).label}</span>}
        {!value && <span className="placeholder">{label}</span>}
        {value && <SaveValueToSessionStorage storageKey={inputId} value={value} onChange={handleSave} />}
        {value && <ClearInput onClick={handleClearInput} />}
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