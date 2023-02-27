document.write(typeof "150");

function Infinity_Number() {
    var A = 2E312;
    document.getElementById("Infinity").innerHTML = A;
}

function Negative_Infinity() {
    var B = -2E410;
    document.getElementById("Negative-Infinity").innerHTML = B;
}

function BooleanTrue() {
    document.write(10 > 3);
}

function BooleanFalse() {
    document.write(10 < 3);
}

console.log(75 + 75);

function TypeCoercion() {
    document.write("1" + 50);
}

function Double_Equal_True() {
    document.write(150 == 150);
}

function Double_Equal_False() {
    document.write(150 == 149);
}

function Triple_Equal1() {
    var C = 150;
    var D = 150;
    document.write(C === D);
}

function Triple_Equal2() {
    var E = 150;
    str = "Hello";
    document.write(E === str);
}

function Triple_Equal3() {
    var F = 150;
    var G = "150";
    document.write(F === G);
}

function Triple_Equal4() {
    var H = 150;
    var I = 149;
    document.write(H === I);
}

function Logical1() {
    document.write(150 > 149 && 150 >= 150);
}

function Logical2() {
    document.write(150 > 149 && 150 > 150);
}

function Logical3() {
    document.write(150 > 149 || 150 > 150);
}

function Logical4() {
    document.write(150 < 149 || 150 > 150);
}

function Not() {
    document.getElementById("Not-true").innerHTML = !(150 > 150);
}

function Not1() {
    document.getElementById("Not-false").innerHTML = !(150 >= 150);
}