const ClientError = require('../exceptions/ClientError');

const responseHandler = (error, h) => {
  if (error instanceof ClientError) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });
    response.code(error.statusCode);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Sorry, there is error on our server.',
  });
  response.code(500);
  console.error(error);
  return response;
};

module.exports = responseHandler;
