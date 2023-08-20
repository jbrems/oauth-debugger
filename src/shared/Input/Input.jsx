import { useEffect, useId, useRef, useState } from 'react';

import './Input.css';

import Label from '../Label/Label';
import Message from '../Message/Message';
import SaveValueToSessionStorage from '../SaveValueToSessionStorage/SaveValueToSessionStorage';
import ClearInput from '../ClearInput/ClearInput';

export default function Input ({ inputId, label, initialValue, type = 'text', status = 'DEFAULT', message, onChange = () => {} } = {}) {
  const id = useId();
  const inputRef = useRef();

  const [value, setValue] = useState(initialValue);
  const [focused, setFocused] = useState(false);
  const [, forceUpdate] = useState(0);

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
    forceUpdate(i => i + 1); // Workaround to force the component to rerender
  };

  return <div className={`input-container ${status.toLowerCase()}`}>
    {(value || focused) && <Label htmlFor={id}>{label}</Label>}
    <input ref={inputRef} id={id} type={type} value={value} placeholder={!focused ? label : ''} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
    <SaveValueToSessionStorage storageKey={inputId} value={value} onChange={renderComponent} />
    {value && <ClearInput onClick={handleClearInput} />}
    <Message status={status}>{message}</Message>
  </div>;
}