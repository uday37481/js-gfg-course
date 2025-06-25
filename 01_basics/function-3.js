                                                      // Function for return values

//                                              Pure function

function div (x, y)
{
  return x/y ;
}

const result = div (98,14);
console.log(`The result of division is ${result}`); 

//                                                     Arrow function =>


const mod = (a, b) =>
{
  return a % b ;
}
console.log (`The result of mod is ${mod (13,3)}`) ;


const TotXandY = (p, q) => p > q ? p + q : q - p;                      // output = cond ? true action : false action ;
console.log(`The result of total by comparing is ${TotXandY(32,48)}`);



/*                                    Function to cal sum of no. from 1 to 1000
 sum = 0 + 1 = 1
 sum = 1 + 1 = 2 
 sum = 2 + 2 = 4 
 sum = 4 + 3 = 7 
 sum = 7 + 4 = 11 
...
*/

function calSum (min, max)
{
   let sum = 0;
  for (let i = min; i<max; i++)
    {
      sum = sum + i;
    }
    return sum ;
}

const res = calSum(1, 1000);
console.log (`The sum from 1 to 1000 is ${res}`) ;
