function queueTime(customers, n) {
    const tills = new Array(n).fill(0);
    for (let waitTime of customers) {
      const lowestWaitTill = tills.indexOf(Math.min(...tills));
      tills[lowestWaitTill] += waitTime;
      
    }
    return Math.max(...tills);
  };

console.log(queueTime([1,2,3,4,5], 100));