function removeSmallest(numbers) {
    if (numbers === []) {
      return numbers;
    } else {
      const output = [...numbers];
      let minValue = output.indexOf(Math.min(...output));
      output.splice(minValue, 1);
      return output;
    }
  };

console.log(removeSmallest([2,2,1,2,1]));