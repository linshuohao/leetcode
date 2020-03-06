const mergeSort = (arr) => {
  const len = arr.length;
  if (len === 1) {
    return arr
  }
  const middle = Math.floor(len / 2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const result = [];
  while(left.length > 0 && right.length >0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  if (left.length > 0) {
    result.push(...left)
  }
  if (right.length > 0) {
    result.push(...right)
  }
  return result;
}

const arr = mergeSort([2, 2, 4, -4, 9, 1, 0, -6, -2, -2, 8, 2])
