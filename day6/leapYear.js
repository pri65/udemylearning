function isLeap(year) {
    if(year%4 == 0 || year%100 == 0 || year%400 == 0) {
       console.log("yes it is a leap year")
    } else {
        console.log("No it's not a leap year")
    }
}