const x = 12;
const y = 3;

 //Addition:
console.log(x + y);

//Subtraction:
console.log(x - y); 

//Multiplication:
console.log(x * y); 

//Division:
console.log(x / y); 

Remainder:
console.log(x % y); 

const p = "12";
const q = "3";
console.log(p + q);
console.log(p - q); 
console.log(p * q); 
console.log(p / q);
// treated as strings

//Exponentiation:
console.log(p ** 2);
console.log(q ** 3);

console.log(50 > 30);
console.log(50 < 30);  
console.log(30 >= 30); 
console.log(50 <= 40); 
console.log(50 == 40); 

let a = 30, b = 10, e = 2; 
console.log(a + b);
console.log(a - b);
console.log(a * b);     
console.log(a / b);

console.log(b % a); 
console.log(a % e);

console.log(a ** 2);
console.log(b ** 3); 

const c = 12;
const d = "3";
console.log(c + d); 
console.log(c - d);
console.log(c * d); 
console.log(c / d); 

const i = "apple";
const j = "mango";
console.log(i + j); // NaNconcept
console.log(i - j); 
console.log(i * j);
console.log(i / j); 

//Best Practices for Arithmetic Operations

const userInput = "42"; 
const numberInput = Number(userInput);

if (!isNaN(numberInput)) 
    {
    console.log(numberInput + 8); 
    } 
    else 
    {
    console.log('Invalid input');
    }