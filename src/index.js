
exports.min = function min (array) {
  if (!array) return 0;
  if (array.length === 0) return 0;

  array.sort((a, b) => a - b);
  return array[0];  
}

exports.max = function max (array) {
  if (!array) return 0;
  if (array.length === 0) return 0;

  array.sort((a, b) => a - b);
  return array.pop();
}  

exports.avg = function avg (array) {
  if (!array) return 0;
  if (array.length === 0) return 0;

  const sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;  
}
