const isSquare = function(n) {
    
    let sqrtNumber = Math.sqrt(n);
   
    if (Math.pow(Math.ceil(sqrtNumber), 2) === n) {
        return true;
    } else {
        return false;
    }
  };

  console.log(isSquare(25));