import { useEffect, useId, useRef, useState } from 'react';

import './Checkbox.css';
import Message from '../Message/Message';
import SaveValueToSessionStorage from '../SaveValueToSessionStorage/SaveValueToSessionStorage';

export default function Checkbox ({ inputId, label, initialValue = false, status = 'DEFAULT', message, onChange = () => {} } = {}) {
  const id = useId();
  const inputRef = useRef();

  const [checked, setChecked] = useState(initialValue);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSave = () => {
    forceUpdate(i => i + 1); // Workaround to force the component to rerender
  };

  return <div className={`checkbox-container ${status.toLocaleLowerCase()}`}>
    <div className="input-label-container">
      <input id={id} ref={inputRef} type="checkbox" checked={checked} onChange={handleChange}></input>
      <label htmlFor={id}>{label}</label>
      <SaveValueToSessionStorage storageKey={inputId} value={checked.toString()} onChange={handleSave} />
    </div>
    <Message status={status}>{message}</Message>
  </div>;
}