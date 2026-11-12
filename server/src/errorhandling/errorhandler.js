export default (err, req, res, next) => {
  console.log(err.message);

  let error = "internal server error";
  if (err.statusCode == 404) {
    error = "Not Found";
  } else if ((err.statusCode == 400, (error = "Bad Request")))
    res.status(err.statusCode).json({
      message: err.message,
      error: error,
      statusCode: err.statusCode,
    });
};
