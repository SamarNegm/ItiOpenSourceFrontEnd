var number = parseInt(prompt('Enter Number'));
var shape = "";
var x = 1;

for (var i = 1; i <= number; i++) {
    for (var j = 0; j < number - i; j++) {
        shape += " "
    }
    for (var k = 0; k < i; k++) {
        shape += "*"
    }
    shape += "\n";

}
console.log(shape);