//variables
var iteration;
var index;
var test = [8,9];
var array = [0,1,2,3,4,5,6,7]
var increment = 3;
var iteration_start = 0;

//push to array
array.push(test);

//for loop
for (iteration = iteration_start; iteration < array.length; iteration+=increment)
{
    index = iteration;
    console.log(array[index]);
}

//while loop
var iteration = 8;
while(iteration < array.length) {
    index = iteration;
    console.log(array[index]);

    iteration += increment
}

//do loop (always runs once)
var iteration = 8;
do {
    index = iteration;
    console.log(array[index]);

    iteration += increment
} while (iteration < array.length)
