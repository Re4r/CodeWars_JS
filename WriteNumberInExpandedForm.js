const expandedForm = (n) => {
    return n.toString()
            .split('')
            .reverse()
            .map((x, i) => x * Math.pow(10, i))
            .filter((x) => x > 0)
            .reverse()
            .join(' + ');
};

console.log(expandedForm(12));