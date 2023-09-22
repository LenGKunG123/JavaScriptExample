/*
DESCRIPTION:
A special type of prime is generated by the formula p = 2^m * 3^n + 1 where m and n can be any non-negative integer.

The first 5 of these primes are 2, 3, 5, 7, 13, and are generated as follows:

2 = 2^0 * 3^0 + 1
3 = 2^1 * 3^0 + 1
5 = 2^2 * 3^0 + 1
7 = 2^1 * 3^1 + 1
13 = 2^2 * 3^1 + 1
..and so on
You will be given a range and your task is to return the number of primes that have this property. For example, solve(0,15) = 5, because there are only 5 such primes >= 0 and < 15; they are 2,3,5,7,13. The upper limit of the tests will not exceed 1,500,000.

More examples in the test cases.

Good luck!
*/

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

function solve(x,y) {
  let countOfPrimes = 0;
  for(let m=0;m<100;m++){
    for(let n=0;n<100;n++){
      const calculateNumber = Math.pow(2,m)*Math.pow(3,n)+1;
      if(calculateNumber>=x&&calculateNumber<=y&&isPrime(calculateNumber)) countOfPrimes+=1;
    }
  }
  return countOfPrimes;
};