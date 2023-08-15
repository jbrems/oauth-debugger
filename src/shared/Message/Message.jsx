import './Message.css';

export default function Message ({ status = 'DEFAULT', children } = {}) {
  if (!children) return <span className="message"></span>;

  const iconClass = status === 'SUCCESS' && 'fa-circle-check' || status === 'WARNING' && 'fa-circle-question' || status === 'ERROR' && 'fa-circle-xmark';

  return <span className={`message ${status.toLowerCase()}`}>
    {iconClass && <i className={`fa fa-regular ${iconClass}`}></i>}
    {children}
  </span>;
}