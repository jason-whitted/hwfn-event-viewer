export default ({ ms = 250 } = {}) => fn => {
  let timeout = 0;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = 0;
      fn(...args);
    }, ms);
  };
};
