function problem(x) {
    if (typeof(x) === 'string') return 'Error';

    return x * 50 + 6;
};

console.log(problem(5));