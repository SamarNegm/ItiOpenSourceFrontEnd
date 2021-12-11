
var number = 0;
setInterval(function () {
    if (number % 3 == 0) {
        var div = document.getElementById("ready");
        div.classList.add("ready2");
        var div2 = document.getElementById("c1");
        div2.classList.add("yellowcircle");
        var div3 = document.getElementById("c3");
        div3.classList.remove("greencircle");


    }
    else if (number % 3 == 1) {
        var div = document.getElementById("study");
        div.classList.add("study2");
        var div2 = document.getElementById("c2");
        div2.classList.add("redcircle");
        var div3 = document.getElementById("c1");
        div3.classList.remove("yellowcircle");

    }
    else if (number % 3 == 2) {
        var div = document.getElementById("go");
        div.classList.add("go2");
        var div2 = document.getElementById("c3");
        div2.classList.add("greencircle");
        var div3 = document.getElementById("c2");
        div3.classList.remove("redcircle");

    }
    number++;

}, 1000)
