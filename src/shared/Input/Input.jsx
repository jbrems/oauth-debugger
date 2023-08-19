import { useEffect, useId, useRef, useState } from 'react';

import './Input.css';

import Label from '../Label/Label';
import Message from '../Message/Message';
import SaveValueToSessionStorage from '../SaveValueToSessionStorage/SaveValueToSessionStorage';
import ClearInput from '../ClearInput/ClearInput';

export default function Input ({ label, initialValue, type = 'text', status = 'DEFAULT', message, onChange = () => {} } = {}) {
  const inputId = useId();
  const inputRef = useRef();

  const [value, setValue] = useState(initialValue);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleClearInput = () => {
    setValue('');
    inputRef.current.focus();
  };

  const renderComponent = () => {
    inputRef.current.focus(); // Workaround to force the component to rerender
  };

  return <div className={`input-container ${status.toLowerCase()}`}>
    {(value || focused) && <Label htmlFor={inputId}>{label}</Label>}
    <input ref={inputRef} id={inputId} type={type} value={value} placeholder={!focused ? label : ''} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
    <SaveValueToSessionStorage label={label} value={value} onChange={renderComponent} />
    {value && <ClearInput onClick={handleClearInput} />}
    <Message status={status}>{message}</Message>
  </div>;
}