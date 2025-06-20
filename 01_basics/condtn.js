//                                CONDITIONAL STATEMENTS

let marks = 53;

const result = marks >= 85 ? "A++ Grade !!" : 
               marks >= 75 ? "Distinction" :
               marks >= 60 ? "Second Division" :
               marks >= 45 ?  "First Division" : "Just passed";

console.log (result);



let phy = 80, math=85, chem =78 ;
if( !(phy >= 85 || math > 75))
    console.log("Eligible for CET");
else
   console.log("Not Eligible for CET");



//                           Nullish Coalescing
   let name = "Uday" ;
   console.log(name ?? "Nagar");


const naam = "Vincent";
let i;
for(i=0; i<naam.length; i++)
    {
        console.log(naam[i]);
    }                    


//                              FUNCTIONS


function mult(num1, num2)
{
    return num1 * num2 ;
}
console.log(mult(12,3));

function print(naam)
{
    console.log(naam);
}
print("Uday Nagar");
print("Pavan korde");

let any = function()
{
    console.log("AJAX function");
}
any ();

let cube = a => a*a*a ;  
console.log(cube(5));

