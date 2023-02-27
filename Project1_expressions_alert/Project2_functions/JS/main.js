// Defined a function and named it "myFunction"
function myFunction() {
    // I defined a variable and I gave it a string value: "I am learning"
    var sentence = "I am learning";
    // I concatenated the variable "sentence"
    sentence += " a lot from this course!";
    // Putting the value of result into HTML element with "Concatenate" id
    document.getElementById("Concatenate").innerHTML = sentence;
}