// Example to clear callback function, if call back not use what happens

function fetchCustom(url){
    console.log("Started downloading");
    setTimeout(function process(){
        console.log("Download Completed");
        let response = "Dummy data";
    },3000);
}

let response = fetchCustom("www.google.com")
console.log("Download Response", response);


// After using callback 

function fetchCustom(URL, fn){
    console.log("Started downloading");
    setTimeout(function process(){
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
        console.log("Ending The function")
    },3000)
}

fetchCustom("www.google.com", function downloadcallback(response){
    console.log("Download response is :", response);
})


// A closure is when a function “remembers” variables from the place where it was created, even after that outer function 
// is done running.

// Closure is like a function carrying a backpack, where it stores all the variables from where it was created. Even when it’s called later, 
// it still has access to those variables in the backpack.

// Lexical scoping in JavaScript refers to the fact that a variable's scope (where it can be accessed) is determined by
//  its position in the source code — specifically, where it's declared. It is also sometimes called static scoping.

/*  How Lexical Scope Works:
A function in JavaScript has access to variables from:
Its own scope (inside the function)
Its outer/parent scopes (where it was defined)
The global scope*/


function todo(task){
    console.log("Start of todo");
    setTimeout(function fun(){
         console.log("Completed task: " + task);
    },2000);
    console.log("Ending of todo");
}

console.log("starting");
todo("assignment");
console.log("Ending");


// How JS remember the variables of todo even if todo function is over?
// JS maintain separate closure execution context where all variables are maintain and not values, so even if value changed in 
// in variable we will get the changed value. 

// Change value example
function fun(task1, task2){
    task1="paras";
    setTimeout(function gun(){
        console.log("Completed", task1);
    },2000);

    task1=task2;
    task2="assign";
}

fun("12","34")


// Intresting Example 1 

function test(){
    for(var i=0; i<3; i++){
        setTimeout(function exec(){
            console.log(`i:${i}`)
        },i*1000);
    }
}

test();

// Intresting Example 2
function test(){
    for(let i=0; i<3; i++){ // <-- block-scoped
        setTimeout(function exec(){
            console.log(`i:${i}`)
        }, i*1000);
    }
}

test();

// JS runs only sychronous code only for those features which is know to javascript, and not provide by runtime like setTimeout
// Understand using big for loop count

function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Executed some task");
    },3000);

    for(let i=0; i<1000000000; i++){
        // some task
    }
    console.log("End");
}

process();
console.log("Tata");

// Another instresting example 

function process(){
    console.log("Start");
    for(let i=0; i<2; i++){
        setTimeout(function exec(){
            console.log("Executed after sometime");
        },3000)
        console.log("inside for loop");
    }
    for(let j=0; j<100000000; j++){

    }
    console.log("End");
}

process();

// Promises
// Disadvantages of callback hell 
// 1) Callback hell (not measure one), 2)Inversion of control

// Inversion of control

function fun(inputString, fn){
    let output = inputString.split(',')
    for(let i=0; i<output.length; i++){
        fn(output[i]);
    }
}

fun("Name:Harshal,Subject:JS", function process(ip){
    let arr=ip.split(":");
    console.log("{", arr[0],"=>",arr[1],"}");
})

// suppose internal team, call twice, if process logic of ticket booking, if it is business logic, giving access/control to 
// someone else to run function, power to exploit - twice thrice, biggest disadvantage you loos control over your function to 
// passing someone else

// Promises Jumps
/*
    1) Readability enhancer
    2) Placeholder for data we get back from future !
*/

// Sample promise code 

function demo2(val){
    return new Promise(function(resolve, reject){
        console.log("Start");
        setTimeout(function process(){
            console.log("Completed Timer ");
            
            if(val%2==0){
                resolve("Even");
            }else{
                reject("Odd");
            }
        },1000);
        console.log("Somewhere");
    })

}

demo2(4);