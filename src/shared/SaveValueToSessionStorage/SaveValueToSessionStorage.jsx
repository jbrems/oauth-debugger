import { isItemInSessionStorage, removeItemFromSessionStorage, saveItemToSessionStorage } from './session-storage-helper';

import './SaveValueToSessionStorage.css';

export default function SaveValueToSessionStorage ({ storageKey, value, onChange = () => {} } = {}) {
  const handleSaveInput = (event) => {
    saveItemToSessionStorage(storageKey, value);
    onChange(true);
    event.preventDefault();
    event.stopPropagation();
  };

  const handleUndoSaveInput = (event) => {
    removeItemFromSessionStorage(storageKey);
    onChange(false);
    event.preventDefault();
    event.stopPropagation();
  };

  return <span className="save-icon-container">
    {value && <i className="fa fa-regular fa-floppy-disk save-input-icon" onClick={handleSaveInput} title="Save value to session storage"></i>}
    {value && isItemInSessionStorage(storageKey, value) && <i className="fa fa-slash undo-save-input-icon" onClick={handleUndoSaveInput} title="Remove value from session storage"></i>}
  </span>;
}