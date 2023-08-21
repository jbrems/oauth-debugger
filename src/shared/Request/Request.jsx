import './Request.css';

export default function Request ({ children } = {}) {
  return <div className="request-container">
    <div className="title">Request</div>
    <div className="content">
      {children}
    </div>
  </div>;
}