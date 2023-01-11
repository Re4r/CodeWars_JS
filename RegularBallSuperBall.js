const Ball = function(ballType = 'regular') {
    this.ballType = ballType;
};

console.log(new Ball().ballType);
console.log(new Ball('super').ballType);