// function to replace all try catch
// catch all errors

const catchAsyncError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default catchAsyncError;
