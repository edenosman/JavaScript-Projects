function fct_Concatenate() { // This function is used to connect the next four variables.
    var A = "I am ";
    var B = "learning ";
    var C = "JavaScript ";
    var D = "and I enjoy it.";
    var sentence = A.concat(B, C, D);
    document.getElementById("Concatenate").innerHTML = sentence;
}

function fct_Slice() { // This function is used to display just a portion of variable "A"
    var X = "Would you like to slice?";
    var Section = X.slice(10,14); // This method is used to cut a portion from variable X
    document.getElementById("Slice").innerHTML = Section;
}

function fct_UpperCase() {
    var text1 = "My name is Eden Osman.";
    var text2 = text1.toUpperCase();
    document.getElementById("UpperCase").innerHTML = text2;
}

function fct_Search() {
    var Z = "Where is the next word: 'JavaScript' located?";
    document.getElementById("Search").innerHTML = Z.search("JavaScript");
}

function fct_NtS() { // This function is used to return a number as a string
    var N = 25;
    document.getElementById("Number_to_String").innerHTML = N.toString();
}

function fct_Length() { // This function utilize the precision method to return a specified length of a number
    var L = 1998.19042550;
    document.getElementById("Length").innerHTML = L.toPrecision(8);
}

function fct_Fixed() {
    var F = 12.345;
    document.getElementById("Fixed").innerHTML = F.toFixed(2);
}

function fct_valueOf() {
    var V = 125;
    document.getElementById("valueOf").innerHTML = V.valueOf();
}