var imgArr = ["/img/car.jpg", "/img/coffee.jpg", "/img/ice2.jpg", "/img/p.jpg", "/img/pizza.jpg", "/img/background.jpg"];
var next = document.getElementById("next");
next.addEventListener("click", playNext);
i = 0;
function playNext() {
    var Myimg = document.getElementById('img1');
    Myimg.setAttribute("src", imgArr[++i % 6]);

}
var back = document.getElementById("back");
back.addEventListener("click", playBack);
function playBack() {
    var Myimg = document.getElementById('img1');
    i--;
    if (i < 0)
        i = 5;
    Myimg.setAttribute("src", imgArr[i % 6]);
}
var myVar;
var playSlider = document.getElementById("play");
playSlider.addEventListener("click", play);
function play() {
    myVar = setInterval(function () {
        playNext();

    }, 1000);

}

var stopSlider = document.getElementById("stop");
console.log(stop);
stopSlider.addEventListener("click", stop);
function stop() {
    console.log("stop");
    clearInterval(myVar);
}