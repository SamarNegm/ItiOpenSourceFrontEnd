var num1 = prompt('Enter number');
var answer;
if (num1 % 3 == 0 && num1 % 5 == 0) {
    console.log("FuZZ BUZZ");
}
else if (num1 % 3 == 0) {
    console.log("FIZZ");
}
else if (num1 % 5 == 0) {
    console.log("BUZZ");
}
else {
    console.log("NON");

}