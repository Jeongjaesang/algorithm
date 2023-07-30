const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let value = input[0];

let splitValues = value.split(/([+-])/).filter((str) => str !== "");

let arr = [];
for (let i = 0; i < splitValues.length; i++) {
  if (splitValues[i] === "+" || splitValues[i] === "-") {
    arr.push(splitValues[i]);
  } else {
    arr.push(parseInt(splitValues[i]));
  }
}

let arrWithP = [];

let isMinus = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "-") {
    isMinus = true; // -가 한 번 나온 상태
    arrWithP.push(arr[i]);
    arrWithP.push("(");
  } else if (arr[i + 1] == "-") {
    if (isMinus) {
      arrWithP.push(arr[i]);
      arrWithP.push(")");
      isMinus = false;
    } else {
      arrWithP.push(arr[i]);
    }
  } else if (i == arr.length - 1 && isMinus) {
    arrWithP.push(arr[i]);
    arrWithP.push(")");
  } else {
    arrWithP.push(arr[i]);
  }
}

console.log(eval(arrWithP.join("")));
