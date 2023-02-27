function addition() { //This function is using addition operator
    var A = 150 + 150;
    document.getElementById("Math").innerHTML = "150 + 150 =  " + A;
}

function subtraction() { //This function is using subtraction operator 
    var B = 150 - 149;
    document.getElementById("Math1").innerHTML = "150 - 149 =  " + B;
}

function multiplication() { // This function is using multiplication operator
    var C = 10 * 15;
    document.getElementById("Math2").innerHTML = "10 * 15 =  " + C;
}

function division() { // This function is using division operator
    var D = 1500 / 10;
    document.getElementById("Math3").innerHTML = "1500 / 10 =  " + D;
}

function moreMath() { // This function is using multiple math operators
    var E = (5 + 10 - 5) * 150 / 10;
    document.getElementById("Math4").innerHTML = "(5 + 10 - 5) * 150 / 10 =  " + E;
}

function modulus() { // This function returns a remainder of a diviving operation
    var F = 150 % 7;
    document.getElementById("Math5").innerHTML ="The remainder you have after dividing 150 by 7 is:  " + F;
}

function negation() { // This function returns negation of a variable
    var G = 150;
    document.getElementById("Math6").innerHTML = -G;
}

function increment() { // This function is using the increment operator
    var H = 149;
    H++;
    document.getElementById("Math7").innerHTML = H;
}

function decrement() { // This function is using the decrement operator
    var I = 151;
    I--;
    document.getElementById("Math8").innerHTML = I;
}

function randomNumber() { // This function generates a random number between 0 and 150
    window.alert(Math.random() * 150);
}