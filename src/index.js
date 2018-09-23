/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences = [0, ...preferences];
  var count = 0;
  var i;
  for (i = 1; i < preferences.length; i++) {
    var isTriangle = checkTrianglesByIndex(i, preferences);
    if (isTriangle) {
      count++;
    }
  }

  return count / 3;
};

function checkTrianglesByIndex(index, preferences) {
  //let index = 1;
  let B = preferences;
  let lover1index = index;
  let lover1loves = B[lover1index];

  if (lover1index === lover1loves) return false;

  let lover2index = lover1loves;
  let lover2loves = B[lover2index];

  if (lover2index === lover2loves) return false;

  let lover3index = lover2loves;
  let lover3loves = B[lover3index];

  if (lover3loves === lover3index) return false;

  if (lover3loves === lover1index)
    return true;
  else
    return false;
}