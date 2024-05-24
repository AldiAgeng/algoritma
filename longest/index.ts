function longestWord(sentence: string): string {
  const words = sentence.split(' ');
  let longest = words[0];

  for (let word of words) {
      if (word.length > longest.length) {
          longest = word;
      }
  }

  return longest;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longest = longestWord(sentence);
console.log(`${longest}: ${longest.length} characters`);