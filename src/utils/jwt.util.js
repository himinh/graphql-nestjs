"use strict";
exports.__esModule = true;
exports.decode = exports.signJwt = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var privateKey = "-----BEGIN RSA PRIVATE KEY-----\nMIICXAIBAAKBgQCGhLlpouwodWJ7O+ErKGXSGw18oKN7OKgaxxa878PWRAdKGxDC\nLape3t/MS12R8kq98qppBqaTq9whX1k/cYIPsBqbLFib1ZXwlJ2635lp+X1h2ij8\nw1IMYkCtkpcaS9J1NWyRp2YGRFIb4fSu1DLVeBEt+JoQhUikQmmbYEgrqQIDAQAB\nAoGAA9BLeWU3EMaTLi86aQDSMiy2KyxatimbCndOe7jIcpCnLECsLvUgeWQUMDSK\nyJJ37/6rOiMIIfOjYAbV/uh26XReoxgrrd+keiohSAmoS8J+gTZbPyniLbnpc/em\nBfdiF2etJ6G5RD4bAWSnYZMFR3zLTv0w+bUhK5W3bYuyHSECQQDNvjAMT9JSRB3e\ns0zsDFjtqY2ogDNkEzhOPJc7+cT9K9LSEZpdq9HrDGih714Y/NlkM8Lublfsxz2O\nqJh3173NAkEAp2CgMqqJrOGx1a6b12W9t3fUoF+Nay9zV6R7mDNLMW7ckHiL+Nzu\nKoehHBcyFpS1hdbVnVPUadBj0wdh0rdpTQJACAiYGbL4NGwienKn20O0KTuIo362\nAv9ZIHzvLtFW5sfSSI+VZnjyDmqCn2gYVYNx/Z6jyumWF1HETpC4u106NQJBAJfP\nAt2RYdekyLfna7+crsrl67sdj1WlLvdR3yu3cj6+r1x1iXbJY1a9tzmULEDg1hcz\nOII+k0z5zmCLtIT7B40CQFRsWGw6bw2z+QHfdLTClV3OQndvPMV4VAdnJFxBqcAA\n2ZRCLbcV9QV/YsXf/k0xT0l8tuWgfR0RSKR8WTSikzU=\n-----END RSA PRIVATE KEY-----";
var publicKey = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCGhLlpouwodWJ7O+ErKGXSGw18\noKN7OKgaxxa878PWRAdKGxDCLape3t/MS12R8kq98qppBqaTq9whX1k/cYIPsBqb\nLFib1ZXwlJ2635lp+X1h2ij8w1IMYkCtkpcaS9J1NWyRp2YGRFIb4fSu1DLVeBEt\n+JoQhUikQmmbYEgrqQIDAQAB\n-----END PUBLIC KEY-----";
function signJwt(payload) {
    return jsonwebtoken_1["default"].sign(payload, privateKey, { algorithm: 'RS256' });
}
exports.signJwt = signJwt;
function decode(token) {
    if (!token)
        return null;
    try {
        var decoded = jsonwebtoken_1["default"].verify(token, publicKey);
        return decoded;
    }
    catch (error) {
        console.error("error", error);
        return null;
    }
}
exports.decode = decode;
