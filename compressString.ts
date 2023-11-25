let str = "aaabbcc";

const compressString = (input) => {
  let result = "";
  let count = 1;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      result += input[i] + count;
      count = 1;
    }
  }
  return result;
};
console.log(compressString(str));