var noOfBottles = 99;
while (noOfBottles >= 0) {
    var bottleWord = "bottle";
    if(noOfBottles === 1) {
        bottleWord = "bottles"
    }
    console.log(noOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(noOfBottles + " " + bottleWord + "of beer,");
    console.log("Take one down, pass it around,");
    noOfBottles--;
    console.log(noOfBottles + " " + bottleWord + "of beer on the wall.");
    
}