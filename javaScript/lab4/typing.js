var btn = document.getElementById("m");
btn.addEventListener("click", writeM);
function writeM() {
    var massege = "hello from the other side wish you are ok...";
    console.log(massege.length);
    var win = window.open('', '_blank', 'width=200,height=200');
    var i = 0;
    var myVar;
    myVar = setInterval(function () {
        console.log(i);
        if (i >= massege.length - 1)
            clearInterval(myVar);
        win.document.write(massege[i++]);
    }, 50);

}


