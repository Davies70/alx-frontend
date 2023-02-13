const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = [];

for (let i = 0; i < arr.length; i++) {
  if (i % 3 === 0) {
    newArray.push(arr[i]);
  } else if (i % 3 === 1) {
    newArray.unshift(arr[i]);
  } else {
    newArray.unshift(arr[i]);
    newArray.push(arr[i]);
  }
}

console.log(newArray);
