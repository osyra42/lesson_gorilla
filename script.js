//an array is a list
var array = ["", "sword", 9, false];
console.log(1);
console.log(array);
console.log(" ");

//you can call an index
console.log(2)
console.log(array[1]);
console.log(" ")

//you can edit and index
array[6] = "green";
console.log(3)
console.log(array);
console.log(" ")

//you can add a blank
array[0] = "durability";
console.log(4)
console.log(array);
console.log(" ")

//a blank is undefined
console.log(5)
console.log(array[5]);
console.log(" ")

//lists can go in a list
var pets = ["bird", "fish", "frog"];
array[4] = pets;
console.log(6)
console.log(array);
console.log(" ")

//a variable can be added a string
var hi = "hello world"
array[7] = hi;
console.log(7)
console.log(array)
console.log(" ")

//you can test an array length
array[8] = array[7].length
console.log(8)
console.log(array);
console.log(" ")

//you can edit a string
array[9] = array[7].split(" ")
console.log(9)
console.log(array);
console.log(" ")

//you can add to the end of an array
array.push(5)
array.push("llama")
console.log(10)
console.log(array)
console.log(" ")

//you can remove from the end of an array
array.pop()
console.log(11)
console.log(array)
console.log(" ")

//you can stringify an array
var spliced = array.splice(array)
console.log(12)
console.log(spliced)
console.log(" ")

