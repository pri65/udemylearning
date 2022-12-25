function lifeInWeeks(age) {
   var yearsRemain = 90-age;
    var days = yearsRemain * 365;
    var weeks = yearsRemain *52;
    var months = yearsRemain * 12;

    console.log("You have" + days + "days," + weeks + "weeks, and" + months + "months left");
}
lifeInWeeks(25);