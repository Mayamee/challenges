export function duplicateEncode(word: string) {
  const ignoredCapitalizationString = word.toLowerCase();

  const stash: Record<string, number> = {};

  for (const char of ignoredCapitalizationString) {
    stash[char] = char in stash ? stash[char] + 1 : 1;
  }

  return ignoredCapitalizationString
    .split("")
    .map((char) => (stash[char] > 1 ? ")" : "("))
    .join("");
}

console.log(duplicateEncode("(( @"));
