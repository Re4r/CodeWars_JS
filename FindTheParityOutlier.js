function findOutlier(n){
    const even = [];
    const odd = [];

    for (let item of n) {
        if (item % 2 === 0) {
            even.push(item);
        } else {
            odd.push(item);
        }
    }

    const ouput = [[...even], [...odd]];
    
    for (let item of ouput) {
        if (item.length === 1) return +item.join('');
    }
  };

  console.log(findOutlier([1,1,0,1,1]));