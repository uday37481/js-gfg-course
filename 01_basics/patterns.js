/*
   *
   * *
   * * *
   * * * *
   * * * * *
*/

// standard method of printing patterns
const sym = "* ";
console.log(sym.repeat(1));
console.log(sym.repeat(2));
console.log(sym.repeat(3));
console.log(sym.repeat(4));
console.log(sym.repeat(5));
console.log();

for(let i=5; i>=1; i--)
{
    console.log(sym.repeat(i));
}
console.log();


/*
   * * * * *
   * * * * 
   * * *
   * * 
   * 
*/
for(let i=1; i<=5; i++)
{
    console.log(sym.repeat(i));
}
console.log();



/*
   1
   1 2
   1 2 3
   1 2 3 4
   1 2 3 4 5
*/
for (let i = 1; i <= 5; i++) 
{
    let line = "";
    for (let j = 1; j <= i; j++) 
    {
        line = line + j;
    }
    console.log(line);
}
console.log();

/*
   1 2 3 4 5
   1 2 3 4
   1 2 3
   1 2 
   1 
*/
for (let i = 5; i >= 1; i--) 
    {
    let line = "";
    for (let j = 1; j <= i; j++) 
    {
        line = line + j;
    }
    console.log(line);
}
console.log();


/*
   1
   1 2
   1 2 3
   1 2 3 4
   1 2 3 4 5
   1 2 3 4
   1 2 3
   1 2 
   1 
*/
// Upper half (including middle line)
for (let i = 1; i <= 5; i++) 
{
    let line = "";
    for (let j = 1; j <= i; j++) 
    {
        line = line + j + " ";
    }
    console.log(line.trim());
}

// Lower half
for (let i = 4; i >= 1; i--) 
{
    let line = "";
    for (let j = 1; j <= i; j++) 
    {
        line = line + j + " ";
    }
    console.log(line.trim());
}


/*
Right-angled triangle of numbers

1  
1 2  
1 2 3  
1 2 3 4 
*/
for (let i = 1; i <= 4; i++) 
{
    let line = "";
    for (let j = 1; j <= i; j++) 
    {
        line = line + j + " ";
    }
    console.log(line.trim());
}
console.log();

/*
Floyd’s Triangle
1  
2 3  
4 5 6  
7 8 9 10 
*/
let num = 1;
for (let i = 1; i <= 4; i++) 
{
    let line = "";
    for (let j = 1; j <= i; j++) 
    {
        line = line + num + " ";
        num++;
    }
    console.log(line.trim());
}
console.log();
