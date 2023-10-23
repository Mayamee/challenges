export function duplicateEncode(word: string) {
  const ignoredCapitalizationString = word.toLowerCase();

  const stash: Record<string, string> = {};

  for (const char of ignoredCapitalizationString) {
    if (stash[char]) {
      stash[char] = ")";
    } else {
      stash[char] = "(";
    }
  }

  return ignoredCapitalizationString.replace(/./g, (char) => stash[char]);
}

console.log(duplicateEncode("recede"));
