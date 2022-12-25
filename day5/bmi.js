function bmi(weight,height) {
    var x = weight;
    var y = height*height;
    return (Math.round(x/y));
}
 var BMI = bmi(65,1.8);
 console.log(BMI);