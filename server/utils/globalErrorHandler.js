import AppError from "./AppError.js";

const handleValidationError = (error) => {
  const errors = Object.values(error.errors).map(err => err.message);
  const message = 'invalid input data: ' + errors.join(' ');
  return new AppError(message, 400);
};
const handleDuplicateFieldError = (error) => {
  const duplicateField = Object.keys(error.keyValue);
  const message = `Data with ${duplicateField.join(', ')} already exists`;
  return new AppError(message, 400);
};
const sendErrorRes = function (err, res) {
  res.status(err.statusCode).json({
    status: (err.statusCode < 500) ? 'fail' : 'error',
    data: {
      message: err.message,
      error: err,
      stack: err.stack
    }
  });
};
const handleError = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(err);
  if (err.name === 'ValidationError') error = handleValidationError(error);
  else if (err.code === 11000) error = handleDuplicateFieldError(error);
  error.statusCode = error.statusCode || 500;
  sendErrorRes(error, res);
};

export default handleError;