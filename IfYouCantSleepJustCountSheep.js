var countSheep = function (num){
  let count = '';
  if (num === 0) {
    return count;
  } else {
    for (let i = 1; i <= num; i++) {
      count += i + ' sheep...';
    }
  }
  return count;
};

console.log(countSheep(10));