import { useEffect, useId, useState } from 'react';

import './Checkbox.css';
import Message from '../Message/Message';

export default function Checkbox ({ label, initialValue = false, status = 'DEFAULT', message, onChange = () => {} } = {}) {
  const id = useId();

  const [checked, setChecked] = useState(initialValue);

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return <div className={`checkbox-container ${status.toLocaleLowerCase()}`}>
    <div className="input-label-container">
      <input id={id} type="checkbox" checked={checked} onChange={handleChange}></input>
      <label htmlFor={id}>{label}</label>
    </div>
    <Message status={status}>{message}</Message>
  </div>;
}