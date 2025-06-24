//                                           Calling Named Function

let factorial = function fact(n) 
{
    if (n <= 1) 
        return 1;
    
    return n * fact(n - 1);
};

console.log(factorial(6)); // here comes the call



//                                           Callback Function

setTimeout(function() 
{
    console.log("This is a callback function!");
}, 1000);

//                                         IIFE Function

(function() 
{
    console.log("IIFE executed immediately!");   //a function that is executed immediately after it is defined
})();



//                                        Event Handler
window.onload = function() 
{
    document.getElementById("myButton").addEventListener("click", function() 
    {
        alert("Button was clicked!");        //adds interactivity to web pages.
    });


//                        When you hover over the paragraph, its text changes.


    document.getElementById("myPara").addEventListener("mouseover", function() 
    {
        this.textContent = "You hovered over the paragraph!";
    });
};
