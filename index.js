const SQRT2 = require( 'const-sqrt-two' );
const todd_square = require('todd-square');

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloGET = (req, res) => {
  res.send('Hello World from GitHub! The square root of 2 is ' + SQRT2 + 
  ' or is it ' +todd_square(2) + '?');
};
