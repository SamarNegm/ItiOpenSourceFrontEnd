for (var i = 0; i < 10; i++) {
    console.log(i);

}
alert('hello open source');
var n = 1;
console.log(typeof (n));
var x = null;
console.log(typeof (x));//return object
var n1 = "2";
var n2 = 3;
n1 + n2;
console.log(n1 + n2);
Boolean(1);

/*

creation phase
excution phase

coarction
num+string =string


== ---->"2"==2 return true         check value
=== ---->"2"==2 return false       check value and datatype


"true"==true  بتحول الترو الاولي ل نان و يجي يقارن ب 1 اللي هي الترو ف يرجع ب فولس

1==true  true
nan ==nan false




Boolean(1)
true
Boolean('hi')
true
Boolean(0)
false
Boolean(false)
false
Boolean(undefined)
false
Boolean(null)
false
Boolean(NaN)
false



////////////////////////////
function statement
function expression







*/


///////////////////////function statement

function add(num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;
    return num1 + num2;
}
console.log(add(3, 5));


//////////////////////function expression
var add3 = function (num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;
    return num1 + num2;
}
console.log(add3(3, 6));

var num1 = prompt('Enter first number');

var num2 = prompt('Enter second number');
console.log(add(parseInt(num1), parseInt(num2)));
console.log(isNaN(num1));
alert("detelt");
var confrm = confirm("are you sure?");

document.writeln("ok");
var arr = [1, 2, 3, 4, "samar"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}
