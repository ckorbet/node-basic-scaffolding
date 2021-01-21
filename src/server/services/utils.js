/**
 * Set the response error status
 * @param {Object} res response object
 * @param {String} err the ERROR object
 * @param {Number} code the response code
 * @memberof services/utils.js
 */
const error = (res, err, code) => {
    const errorCode = code || 400;
    const msg = {
      message: err.message,
      stack: err.stack,
    };
  
    if (process.env.NODE_ENV === 'prod') {
      res.status(errorCode).json(msg);
    } else {
      //LoggerService.error(msg);
      res.status(errorCode).json(msg);
    }
  };

/**
 * Set the response success status
 * @param {Object} res response object
 * @param {String} data the success message
 * @param {Number} code the response code
 * @memberof services/utils.js
 */
const success = (res, data, code) => {
  const okCode = code || 200;
  res.status(okCode).json(data);
};

export default {
    success,
    error,
}