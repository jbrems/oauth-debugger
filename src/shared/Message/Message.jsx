import './Message.css';

export default function Message ({ status = 'DEFAULT', children } = {}) {
  if (!children) return <span className="message"></span>;

  return <span className={`message ${status.toLowerCase()}`}>
    <i className={`fa fa-regular ${status === 'SUCCESS' && 'fa-circle-check' || status === 'WARNING' && 'fa-circle-question' || status === 'ERROR' && 'fa-circle-xmark'}`}></i>
    {children}
  </span>;
}