function While_Loop() { // this line creates a function and gives it a name
    var N = ""; // this is an empty local variable
    var X = 2; // this is a local variable
    while (X <= 20) { // this is a while loop
        N += "<br>" +X; 
        X = X + 2;
    }
    document.getElementById("Loop").innerHTML = N;
}

function String_Length() { 
    var text = "What do you think is the length of this question?";
    var length = text.length; // this method generates the length of the variable "text"
    document.getElementById("Length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Violin"];
var Content = "";
var Y;
function for_Loop() { 
    for (Y = 0; Y < Instruments.length; Y++) { // this is a for loop
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    let Animal = [];
    Animal[0] = "dog";
    Animal[1] = "cat";
    Animal[2] = "wolf";
    Animal[3] = "bear";
    document.getElementById("Array").innerHTML = "Only a " + Animal[0] + " can love you more than he loves himself.";
}

const Racket = {type: "Tennis", brand: "Wilson", color: "Blue"};
function constant_function() {
    Racket.brand = "Babolat";
    Racket.price = "$230";
    document.getElementById("Constant").innerHTML = "The racket brand is " + Racket.brand + ", and the price is "+ Racket.price +".";
}


function Calculate(a, b) {
    return a - b;
}
var S = Calculate(10, 5);
document.getElementById("Calculate_Function").innerHTML = S;

let TennisRacket = {
    make: "Babolat",
    model: "Pure Aero Rafa",
    year: "2023",
    color: "pink & yellow",
    description: function() {
        return "The tennis racket is a " + this.make + " " + this.model + " " + this.year + " " + this.color + ".";
    } 
}
document.getElementById("TennisRacket_Object").innerHTML = TennisRacket.description();