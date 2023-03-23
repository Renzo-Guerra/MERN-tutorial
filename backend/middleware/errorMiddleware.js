const errorHandler = (err, req, res, next) => {
  // Si previamente se asigno un status, se le asignara dicho valor, caso contrario un status de error en el server
  const statusCode = (res.statusCode) ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: (process.env.NODE_ENV === 'production') ? null : err.stack
  })
}

module.exports = {
  errorHandler,
}