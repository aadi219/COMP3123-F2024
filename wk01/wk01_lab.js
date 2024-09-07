function capitalizeLetters(str) {
  let words = str.split(" ");
  words.forEach((word, index) => {
    words[index] = word[0].toUpperCase() + word.substring(1);
  });
  return words.join(" ");
}
console.log("Exercise 1:");
console.log(capitalizeLetters("the quick brown fox"));
console.log("\n")

function max(a, b, c) {
  return Math.max(...arguments);
}
console.log("Exercise 2:");
console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));
console.log("\n")

function right(str) {
  if (str.length >= 3) {
    strLen = str.length;
    let last3 = str.substring(strLen - 3, strLen);
    return last3 + str.substring(0, strLen - 3);
  } else {
    return str;
  }
}
console.log("Exercise 3:");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
console.log("\n")

function angle_Type(angle) {
  angle = angle % 360;
  if (angle > 0 && angle < 90) return "Acute angle";
  else if (angle == 90) return "Right angle";
  else if (angle > 90 && angle < 180) return "Obtuse angle";
  else if (angle == 180) return "Straight angle";
}
console.log("Exercise 4:");
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
