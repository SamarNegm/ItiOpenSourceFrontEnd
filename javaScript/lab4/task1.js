var c = 0;
function Rectangle(width, height) {

    this.width = width;
    this.height = height;


}
Rectangle.prototype.area = function () {
    return this.width * this.height;
}
Rectangle.prototype.perimeter = function () {
    return 2 * this.width + 2 * this.height;
}
Rectangle.prototype.info = function () {

    console.log("width is =" + this.width + " height is =" + this.height + " \nArea is= " + this.area() + "  perimeter is = " + this.perimeter());
}
var testR = new Rectangle(5, 10);
testR.info();
var testR2 = new Rectangle(6, 10);
testR2.info();
console.log(Rectangle.prototype);
console.log(Rectangle);
/////////////////////////////////////
class Rectangle2 {
    width;
    height;
    c = 0;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        c++;
    }
    static count() {
        return c;
    }
    perimeter = function () {
        return 2 * this.width + 2 * this.height;
    }
    area = function () {
        return this.width * this.height;

    }
    info = function () {

        console.log(".....width is =" + this.width + " height is =" + this.height + " \nArea is= " + this.area() + "  perimeter is = " + this.perimeter());

    }
}
var testR2 = new Rectangle2(5, 10);
testR2.info();
var testR2 = new Rectangle2(6, 10);
testR2.info();
console.log(Rectangle2.count());













////////////////////////////////////////////////////////////////////////C function object

function acceptOnlyTwo(a, b) {
    if (arguments.length == 2) {
        console.log("Ok")
    } else {
        throw 'Parameters must be Two!';

    }
}
//////////////////////////////
function acceptOnlyNumbers(a) {
    var sum = 0;
    if (arguments.length == 0) {
        throw 'Parameters !';

    }
    for (var i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i]) != "number")
            throw 'Parameters must be Two!';
        sum += arguments[i];

    }
    console.log(sum);
    return sum;

}
////////////////////////////

function acceptAllThenReverse(a) {
    for (var i = arguments.length - 1; i >= 0; i--) {
        console.log(arguments[i]);

    }
}

