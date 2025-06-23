// function mult(num1, num2) 
// { 
//     return num1 * num2; 
// }

// Function definition
function welcomeMsg(naam) 
{
   console.log("Hello " + naam + " welcome to GeeksforGeeks");
}
  
// creating a variable
var user = "Uday";
  
// calling the function
welcomeMsg(user);


//                                    Function for printing
function Print(name)
{
	console.log(name);
}
Print("How are you Aryan??");
Print("I am doing well bro !!!");


//                 Anonymous Functions:
//The anonymous functions are basically the functions which can be passed to a variable without having its own identity.

let AnonymousFunction = Function()
{
//Body
}


//                         Calling anonymous Function

let anonymousFunction = function() 
{
    console.log("Here's how you use this function !");
};
anonymousFunction();

//                 Example 

let plan = function() 
{ 
    console.log("Time to plan your goals and tasks!");
};

plan(); // calling


