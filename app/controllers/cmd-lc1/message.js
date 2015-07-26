'use strict';

function isEncoder(msg) {
  var x = msg[0],
      y = msg[1];
  return x === 176 && (y >= 16 || y <= 23);
}

function fromEncoder(msg) {
  var encoder = msg[1] - 16,
      change  = msg[2] - 64;
  return { encoder, change };
}

export default { isEncoder, fromEncoder };
