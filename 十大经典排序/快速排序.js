
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let partitionIndex;
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
}

const partition = (arr, left, right) => {
  const pivot = arr[left];
  // 假设index为比pivot大的索引
  let index = left + 1;
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
      index++;
    }
  }
  [arr[left], arr[index - 1]] = [arr[index - 1], arr[left]]
  return index - 1;
};