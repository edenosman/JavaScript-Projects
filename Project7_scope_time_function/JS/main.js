var X = 150; // This is a global variable
function Add_numbers_1() { // This function will output the result of an addition using the global variable "X"
    document.write(50 + X + "<br>"); 
}
function Add_numbers_2() { // This function will output the result of an addition using the local variable "N"
    var N = 5; // This is a local variable
    document.write(N + 150);
}
function Add_numbers_3() { // This function will output nothing, because the variable "N", used in the addition, is a local variable, not a global one
    document.write(N + 150);
}

function Time_function() { // This function tells what time of the day it is.
    var Time = new Date().getHours(); // this method returns the hour
    var Reply;
    if (Time <= 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time <= 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}