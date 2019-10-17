/*
For a given array whose element values are randomly picked from single-digit integers 0 to 9, return an array with the same digit order but all 0's paired. Paring two 0's generates one 0 at the location of the first.

Ex:

pairZeros([0, 1, 0, 2])
// paired: ^-----^ cull second zero
       == [0, 1, 2];
//   kept: ^

pairZeros([0, 1, 0, 0])
// paired: ^-----^
       == [0, 1,    0];
//   kept: ^

pairZeros([1, 0, 7, 0, 1])
// paired:    ^-----^
       == [1, 0, 7,    1];
//   kept:    ^

pairZeros([0, 1, 7, 0, 2, 2, 0, 0, 1, 0])
// paired: ^--------^ 
//        [0, 1, 7,    2, 2, 0, 0, 1, 0]
//   kept: ^         paired: ^--^
       == [0, 1, 7,    2, 2, 0,    1, 0];
//   kept:                   ^
Here are the 2 important rules:

Pairing happens from left to right in the array. However, for each pairing, the "second" 0 will always be paired towards the first (right to left)
0's generated by pairing can NOT be paired again
*/
function pairZeros(arr) {
  let zero = 0;
  return arr
    .map(v => {
      if (v === 0) {
        if (v === 0) {
          zero++;
        }
        if (v === 0 && zero % 2 === 0) return (v = null);
      }
      return v;
    })
    .filter(v => v !== null);
}
