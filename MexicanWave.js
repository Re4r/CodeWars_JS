function wave(str) {

    const result = [];
    const source = str.split('');
    console.log(source)

    for (let i = 0; i < source.length; i++) {
        if (source[i] === ' ') continue;

        const inner = [...source];
        inner[i] = inner[i].toUpperCase();
        result.push(inner.join(''));
    }
    return result;
};

console.log(wave('two words'));