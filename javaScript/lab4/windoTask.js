var win;
var myVar;
var stop = 1;
function openNewWindow() {
    win = window.open('', '_blank', 'width=200,height=200')

    win.focus();
    play();


}
function play() {
    var c = 0;
    var f = 1;
    myVar = setInterval(function () {
        c++;
        if (!f) {
            win.moveBy(-160, -80);
        }
        else if (f) {
            win.moveBy(160, 80);

        }
        if (c == 8) {
            c = 0;
            f = !f;

        }

    }

        , 1000);

}
var btn = document.getElementById("s");
console.log(btn);
btn.addEventListener("click", stopBtn);
function stopBtn() {


    if (stop) {
        console.log("stop");
        clearInterval(myVar);
        console.log(win.location)
        //win.closed;
        win.close();
    }
    else {
        openNewWindow();
    }
    stop = !stop;
}
