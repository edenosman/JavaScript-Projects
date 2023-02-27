function my_Dictionary() { // This line defines a function and gives it a name : my_Dictionary
    var Tennis = { // This variable is used to create my dictionary
        GrandSlam: "Wimbledon", // This is one of the key-value pairs
        Color: "White", // This is another key-value pair 
        Color: "Green",
        Player: "Roger Federer",
        Brand: "Nike",
        Racquet: "Wilson",
        Backhand: "One-handed Backhand",
    }; 
    delete Tennis.Brand; // This line deletes the Tennis.Brand value
    // The next line is used to generate the output, which will be "undefined"
    document.getElementById("Dictionary").innerHTML = Tennis.Brand;
}