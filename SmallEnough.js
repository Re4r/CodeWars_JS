const smallEnough = (a, limit) => a.every((x) => x <= limit);

console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));