import './Input.css';

import { useId, useRef, useState } from 'react';

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
    {(value || focused) && <label htmlFor={inputId} className="label">{label}</label>}
    <input ref={inputRef} id={inputId} type={type} value={value} placeholder={!focused ? label : ''} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
    {value && <i className="fa fa-regular fa-circle-xmark clear-input-icon" onClick={handleClearInput}></i>}
    {message && <span className="message"><i className={`fa fa-regular ${status === 'SUCCESS' && 'fa-circle-check' || status === 'WARNING' && 'fa-circle-question' || status === 'ERROR' && 'fa-circle-xmark'}`}></i>{message}</span> || <span className="message"></span>}
  </div>;
}