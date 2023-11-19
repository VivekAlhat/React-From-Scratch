let state = [];
let index = 0;

const useState = (initialValue: any) => {
  state[index] = state[index] || initialValue;
  const listeners = [];
  const currIndex = index;

  const setState = (newValue: any) => {
    state[currIndex] = newValue;
    index = 0;
    for (const l of listeners) {
      l();
    }
  };

  const subscribe = (listener: any) => {
    listeners.push(listener);
  };

  index++;

  return [state[currIndex], setState, subscribe];
};

export { useState };
