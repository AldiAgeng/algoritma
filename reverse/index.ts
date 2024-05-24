function reverseAlphabet(input: string): string {
  const letters = input.match(/[a-zA-Z]/g) || [];
  const digits = input.match(/\d+/g) || [];
  return letters.reverse().join('') + digits.join('');
}

const result = reverseAlphabet("NEGIE1");
console.log(result);