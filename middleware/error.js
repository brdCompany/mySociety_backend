const errorHandler = (err, req, res, next) => {
  // Log to console
  console.log(err.stack);
  res.stack(500);
};
