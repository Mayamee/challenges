export const duplicateEncode = (word: string) =>
  word
    .toLowerCase()
    .split("")
    .map((char, _, arr) =>
      arr.indexOf(char) === arr.lastIndexOf(char) ? "(" : ")"
    )
    .join("");

console.log(duplicateEncode("recede"));
