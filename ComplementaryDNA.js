function DNAStrand(dna) {
    const output = [];
    const input = dna.split('');

    for (let item of input) {
        switch (item) {
            case 'A':
                output.push('T');
                break;
            case 'T':
                output.push('A');
                break;
            case 'C':
                output.push('G');
                break;
            case 'G':
                output.push('C');
                break;            
        }
    }
    return output.join('');
};

console.log(DNAStrand("ATTGC"));