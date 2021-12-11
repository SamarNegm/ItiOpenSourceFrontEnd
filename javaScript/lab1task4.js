var number = prompt('Enter Number');
var dollar = "";
var dotIndex = 0;
var cints = "";
for (var i = 0; i < number.length; i++) {
    if (number[i] == '.') {
        dotIndex = i;
        break;
    }
    dollar += number[i];
}
for (var i = dotIndex + 1; i < number.length; i++) {

    cints += number[i];
}
var quarter = 0;
var dim = 0;
var nickel = 0;
quarter = parseInt(cints / 25);
cints = cints % 25;
dim = parseInt(cints / 10);
cints = cints % 10;
nickel = parseInt(cints / 5);
cints = cints % 5;
console.log("You Hava " + dollar + " Dollar and " + quarter + " quarter and " + dim + " dim and " + nickel + " nickel and " + cints + " cints")
