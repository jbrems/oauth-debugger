import { isItemInSessionStorage, removeItemFromSessionStorage, saveItemToSessionStorage } from './session-storage-helper';

import './SaveValueToSessionStorage.css';

export default function SaveValueToSessionStorage ({ label, value, onChange = () => {} } = {}) {
  const handleSaveInput = () => {
    saveItemToSessionStorage(label, value);
    onChange(true);
  };

  const handleUndoSaveInput = () => {
    removeItemFromSessionStorage(label);
    onChange(false);
  };

  return <span className="save-icon-container">
    {value && <i className="fa fa-regular fa-floppy-disk save-input-icon" onClick={handleSaveInput} title="Save value to session storage"></i>}
    {value && isItemInSessionStorage(label, value) && <i className="fa fa-slash undo-save-input-icon" onClick={handleUndoSaveInput} title="Remove value from session storage"></i>}
  </span>;
}