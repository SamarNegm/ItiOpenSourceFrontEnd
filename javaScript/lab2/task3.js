
var tagName = prompt('Enter Tag Name');

var div = document.getElementsByTagName(tagName);
console.log(div);
var tages = div.length;
console.log("all tages " + tages);

var className = prompt('Enter Class Name');
div = document.getElementsByClassName(className);
var classes = div.length;
console.log("all classes " + classes);
var name = prompt('Enter the name');
div = document.getElementsByName(name);
console.log('all name ' + div.length);
var id = prompt('Enter id ');
div = document.getElementById(id);
console.log(div ? "The id exist " : " dosent exist");