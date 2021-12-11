var number = parseInt(prompt('Enter Number'));
if (number == 1) {
    var div = document.getElementById("ready");
    div.classList.add("ready2");
    var div2 = document.getElementById("c1");
    div2.classList.add("yellowcircle");


}
else if (number == 2) {
    var div = document.getElementById("study");
    div.classList.add("study2");
    var div2 = document.getElementById("c2");
    div2.classList.add("redcircle");

}
else if (number == 3) {
    var div = document.getElementById("go");
    div.classList.add("go2");
    var div2 = document.getElementById("c3");
    div2.classList.add("greencircle");

}