const lastWord = (str) => {
  const words = str.trim().split(' ');
  return words[words.length - 1];
};

console.log(lastWord('hello world')); // world