// this file contains all the commonly used functions
// like handling jwt authentication, signin, verify, etc.

// send Response function
export const sendResponse = (res, status, data) => {
  return res.status(status).json(data);
};
