//random number generation
var n = Math.random();
//the above will generate numbers ranging from 0-0.9999999999...
//if we multiply it with 6, then random numbers will be range within 0-5.9999999...

n= (Math.floor(n*6))+1;
//now the random numbers will be 0,1,2,3,4,5,6;