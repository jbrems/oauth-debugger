export function saveItemToSessionStorage (key, value) {
  window.sessionStorage.setItem(key,value);
}

export function getItemFromSessionStorage (key) {
  return window.sessionStorage.getItem(key);
}

export function removeItemFromSessionStorage (key) {
  window.sessionStorage.removeItem(key);
}

export function isItemInSessionStorage (key, value) {
  return JSON.stringify(getItemFromSessionStorage(key)) === JSON.stringify(value);
}