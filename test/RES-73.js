const jwt = require('jsonwebtoken');

module.exports = function createToken() {
    let token = jwt.sign({ foo: 'bar' }, key, { algorithm: 'none' });
    return token;
}



