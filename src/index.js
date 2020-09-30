
exports.min = function min (array) {
  if (array === undefined || array === []) {
    return 0;
  }
  return array.sort(function(a, b){return a - b})[0];
}

exports.max = function max (array) {
  if (array === undefined || array === []) {
    return 0;
  }
  return array.sort(function(a, b){return b - a})[0];
}

exports.avg = function avg (array) {
  if (array === undefined || array === []) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
