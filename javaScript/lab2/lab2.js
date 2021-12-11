var person = {
    fname: "sam",
    age: 12,
    color: ["red", "yelow"],
    desply: function () {
        return "Hello world";
    }

}

//dot notation
console.log(person.desply());
//supscript notation
console.log(person["fname"]);
person.age = 30;
delete person.color;
console.log(person);
person.new = 'new';
console.log(person);
//new constructor
//var person = new object();
var str = "hi bye";
str = str.toLocaleUpperCase();
console.log(str);
/////////////////////////dom
var div1 = document.getElementById("div1");
var c1 = document.getElementsByClassName("c ")
/////////////
