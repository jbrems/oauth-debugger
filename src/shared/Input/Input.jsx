import { useId, useRef, useState } from 'react';

import './Input.css';

import Label from '../Label/Label';
import Message from '../Message/Message';

export default function Input ({ label, initialValue, type = 'text', status = 'DEFAULT', message, onChange = () => {}, onTouched = () => {} } = {}) {
  const inputId = useId();
  const inputRef = useRef();

  const [value, setValue] = useState(initialValue);
  const [focused, setFocused] = useState(false);

  const changeValue = (value, event) => {
    setValue(value);
    onChange(value, event);
    onTouched();
  };

  const handleChange = (event) => {
    changeValue(event.target.value, event);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    onTouched();
  };

  const handleClearInput = () => {
    changeValue('');
    inputRef.current.focus();
  };

  return <div className={`input-container ${status.toLowerCase()}`}>
    {(value || focused) && <Label htmlFor={inputId}>{label}</Label>}
    <input ref={inputRef} id={inputId} type={type} value={value} placeholder={!focused ? label : ''} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
    {value && <i className="fa fa-regular fa-circle-xmark clear-input-icon" onClick={handleClearInput}></i>}
    <Message status={status}>{message}</Message>
  </div>;
}