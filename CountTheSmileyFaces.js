function countSmileys(arr) {
    return arr.filter( face => /[:;]{1}[-~]?[)D]{1}/.test(face) ).length;
  }