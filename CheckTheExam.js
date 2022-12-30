function checkExam(keys, answers) {
    let grade = 0;

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === answers[i]) grade += 4;
        if (keys[i] !== answers[i] && answers[i] !== '') grade -= 1;
        if (answers[i] == '') grade += 0; 
    }
    if (grade > 0) {
        return grade;
    } else {
        return 0;
    }
        
};

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));