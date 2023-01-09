const sumDigits = (number) => Array.from(Math.abs(number).toString()).reduce((acc, item) => acc + parseInt(item), 0);
     
console.log(sumDigits(-99));