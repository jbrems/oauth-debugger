import './InputOutput.css';

export default function InputOutput ({ children = [] } = {}) {
  const [input, ...output] = children;

  return <div className="input-output-container">
    <div className="input-container">{input}</div>
    <div className="output-container">{output}</div>
  </div>;
}