const cmd = console.log;

var a = 2;
var b = 5;
var c = "score ";

//output 1
//adding two numbers
cmd("Output #01");
var adding = a + b;
cmd(adding);
cmd(" ");

//output 2
//concacting numbers and strings
cmd("Output #02");
var concact = c + b;
cmd(concact);
cmd(" ");

//output 3
//adding in a sentence
cmd("Output #03");
cmd("I am " + b + " years old.");
cmd(" ");

//output 4
//all the maths
cmd("Output #04");
console.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6
var x = 15;
console.log(x % 2);
cmd(" ")

//output 5
//+= 
cmd("Output #05")
a += 1; //a = a + 1;
cmd(a);
cmd(" ")

//output 6
//algebra for monkey
cmd("Output #06")
cmd(Math.abs(-3))
cmd(Math.exp(4))
cmd(Math.pow(2,4))
cmd(2*2*2*2)
cmd(Math.floor(7.51))
cmd(Math.random())
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNumber);
