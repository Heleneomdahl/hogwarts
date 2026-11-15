export default (err, req, res, next) => {
  console.log(err.message);

  const statusCode = err.statusCode || 500;
  // jeg har oprettet konstanten "statusCode"
  // for at undgå at skrive fejlkoder med 500 i alle komponenter.
  // Er det en god løsning eller hvordna kan det gribes an på en bedre måde?
  let error = "internal server error";
  if (statusCode == 404) {
    error = "Not Found";
  } else if (statusCode == 400) {
    error = "Bad Request";
  }
  res.status(statusCode).json({
    message: err.message,
    error: error,
    statusCode: statusCode,
  });
};
