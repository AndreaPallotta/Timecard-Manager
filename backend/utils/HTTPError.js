const createError = (errorMsg = 'Unknown Error Found', code = 500) => {
  return { Code: code, Error: errorMsg };
};

class HTTPError {
  static E400(
    res,
    errorMsg = 'The request cannot be fulfilled due to bad syntax'
  ) {
    const { Code, Error } = createError(errorMsg, 400);
    if (!res) return { Code, Error };
    return res.status(Code).json(Error);
  }
  static E401(
    res,
    errorMsg = 'Authentication has failed or not yet been provided'
  ) {
    const { Code, Error } = createError(errorMsg, 401);
    if (!res) return { Code, Error };
    return res.status(Code).json(Error);
  }
  static E403(
    res,
    errorMsg = 'The server is refusing to respond to the request'
  ) {
    const { Code, Error } = createError(errorMsg, 403);
    if (!res) return { Code, Error };
    return res.status(Code).json(Error);
  }
  static E404(res, errorMsg = 'The requested data could not be found') {
    const { Code, Error } = createError(errorMsg, 404);
    if (!res) return { Code, Error };
    return res.status(Code).json(Error);
  }
  static E408(res, errorMsg = 'The server timed out waiting for the request') {
    const { Code, Error } = createError(errorMsg, 408);
    if (!res) return { Code, Error };
    return res.status(Code).json(Error);
  }
  static E500(res, errorMsg = 'Internal Server Error') {
    const { Code, Error } = createError(errorMsg, 500);
    if (!res) return { Code, Error };
    return res.status(Code).json(Error);
  }
  static E503(res) {
    const { Code, Error } = createError(
      'The server is currently unavailable',
      503
    );
    if (!res) return { Code, Error };
    return res.status(Code).json(Error);
  }
}

module.exports = HTTPError;
exports.createHTTPError = createError;
