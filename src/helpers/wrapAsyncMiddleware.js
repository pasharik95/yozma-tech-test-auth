/**
 * Function for wrapping async middlewares
 * @param { function } fn - middleware
 */
module.exports = (fn) => (req, res, next) => { fn(req, res, next).catch(next); };
