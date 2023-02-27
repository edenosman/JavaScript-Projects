function Ride_Function() { // This line is generating a function and a name for it
    var Height, Can_ride; // This line creates two variables
    Height = document.getElementById("Height").value; 
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) { // This line creates a function with 4 parameters
    this.Vehicle_Make = Make; // this is one of the parameters
    this.Vehicle_Model = Model; // this is another parameter of the function
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function New_This() {
    document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}

function function_Count() { // This function is used to count
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 1;
        function Plus_five() { // This is a nested function
            Starting_point += 5;}
            Plus_five();
            return Starting_point;
    }
}