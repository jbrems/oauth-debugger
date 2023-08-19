import './ClearInput.css';

export default function ClearInput ({ onClick = () => {} } = {}) {
  return <i className="fa fa-regular fa-circle-xmark clear-input-icon" onClick={onClick} title="Clear value"></i>;
}