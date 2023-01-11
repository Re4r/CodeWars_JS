const uniqueInOrder = (iterable) => [...iterable].filter((item, idx) => item !== iterable[idx + 1]);

  console.log(uniqueInOrder('AAAABBBCCDAABBB'));