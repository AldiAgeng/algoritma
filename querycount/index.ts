function queryCount(input: string[], query: string[]): number[] {
  return query.map(q => input.filter(item => item === q).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const output = queryCount(INPUT, QUERY);
console.log(output);