function consonantCount(str) {
    return str.replace(/[^a-zA-Z]|[aeiou]/g, '').length;
};

console.log(consonantCount('h^$&^#$&^elLo world'));
