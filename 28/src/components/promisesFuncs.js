const tap = cb => value => (cb(value), value);

const logErr = err => err && console.error(err);

const makePromise = (cb, ...args) =>
  new Promise((res, rej) => cb(...args, (...args) => res(args)));

module.exports = {
  tap,
  logErr,
  makePromise
};
