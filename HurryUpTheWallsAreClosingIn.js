function canEscape(walls) {
    for (let i = 0; i < walls.length; i++) {
        if (Math.min(...walls[i]) - i < 2) {
            return false;
        }
    }
    return true;
};

console.log(canEscape([[2, 2], [3, 3], [4, 4]]));