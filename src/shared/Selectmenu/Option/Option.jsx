import './Option.css';

export default function Option ({ value, label, description = '', selected = false, hidden = false } = {}) {
  return <option value={value} selected={selected} className={`${hidden ? 'hidden' : ''} ${selected ? 'selected' : ''}`}>
    <div className="label">{label}</div>
    {description && <div className="description">{description}</div>}
  </option>;
}