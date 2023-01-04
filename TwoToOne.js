function longest(s1, s2) {
    const distinct = new Set(s1 + s2);

    return Array.from(distinct).sort().join('');
};

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));