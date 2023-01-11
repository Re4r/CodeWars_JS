function narcissistic(value) {
    const input = value.toString().split('');
    const result = input.reduce((acc, item) => parseInt(acc) + Math.pow(parseInt(item), input.length), 0);
    
    return result === value ? true : false;
  };

  console.log(narcissistic(370));
  