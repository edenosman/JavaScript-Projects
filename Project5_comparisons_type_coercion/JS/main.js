document.write(typeof "150"); // This output the type of "150"

function Infinity_Number() { // This function is generating infinity as an output
    var A = 2E312;
    document.getElementById("Infinity").innerHTML = A;
}

function Negative_Infinity() { // This function is generating "-infinity" as an output
    var B = -2E410;
    document.getElementById("Negative-Infinity").innerHTML = B;
}

function BooleanTrue() { // This function is used to generate "true"
    document.write(10 > 3);
}

function BooleanFalse() { // This function is used to generate "false"
    document.write(10 < 3);
}

console.log(75 + 75); // This method generates the result in the console, not in the browser

function TypeCoercion() { // This function is used to concatenate two different data types
    document.write("1" + 50);
}

function Double_Equal_True() { // This function returns true
    document.write(150 == 150);
}

function Double_Equal_False() { // This function returns false
    document.write(150 == 149);
}

function Triple_Equal1() { // This function returns true because the variables are equals
    var C = 150;
    var D = 150;
    document.write(C === D);
}

function Triple_Equal2() { // This function returns false because there are two different data types
    var E = 150;
    str = "Hello";
    document.write(E === str);
}

function Triple_Equal3() { // This function returns false because the values are not the same type
    var F = 150;
    var G = "150";
    document.write(F === G);
}

function Triple_Equal4() { // This function returns true because the variables are not equals
    var H = 150;
    var I = 149;
    document.write(H === I);
}

function Logical1() { // This function returns true because both of the conditions are true
    document.write(150 > 149 && 150 >= 150);
}

function Logical2() { // This function returns false because one of the conditions is false
    document.write(150 > 149 && 150 > 150);
}

function Logical3() { // This function returns true because one of the conditions is true
    document.write(150 > 149 || 150 > 150);
}

function Logical4() { // This function returns false because both conditions are false
    document.write(150 < 149 || 150 > 150);
}

function Not() { // This function returns true
    document.getElementById("Not-true").innerHTML = !(150 > 150);
}

function Not1() { // This function returns false
    document.getElementById("Not-false").innerHTML = !(150 >= 150);
}