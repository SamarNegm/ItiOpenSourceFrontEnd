var input1 = document.getElementById("uname");
var input2 = document.getElementById("email");
var input3 = document.getElementById("upass");
var radio1 = document.getElementById("f");
var radio2 = document.getElementById("m");
var chBox1 = document.getElementById("tennis");
var chBox2 = document.getElementById("Football");
var chBox3 = document.getElementById("Running");
var select = document.getElementById("countries");
var btn = document.getElementById("submit");
var btn2 = document.getElementById("reset");
var p = document.getElementById("output1");
var p2 = document.getElementById("output2");
var p3 = document.getElementById("output3");
var p4 = document.getElementById("output4");
var p5 = document.getElementById("output5");
var p6 = document.getElementById("output6");
input1.addEventListener('keyup', nameHandler);

function nameHandler() {
    var inputValue = input1.value;
    if (inputValue.length == 0) {
        input1.style.border = '1px solid red';
        p.style.display = 'block'
    } else {
        input1.style.border = '1px solid green';
        p.style.display = 'none'

    }
}
input2.addEventListener('keyup', emailHandler);

function emailHandler() {
    var inputValue = input2.value;
    if (inputValue.length == 0) {
        input2.style.border = '1px solid red';
        p2.style.display = 'block'
    } else {
        input1.style.border = '1px solid green';
        p2.style.display = 'none'

    }
}
input3.addEventListener('keyup', passHandler);

function passHandler() {
    var inputValue = input3.value;
    if (inputValue.length < 8) {
        input3.style.border = '1px solid red';
        p3.style.display = 'block'
    } else {
        input3.style.border = '1px solid green';
        p3.style.display = 'none'

    }

}
btn.addEventListener('click', btnSubmit);
function btnSubmit() {
    nameHandler();
    emailHandler();
    passHandler();

    console.log("hi");

    if (!radio1.checked && !radio2.checked) {
        radio1.style.border = '1px solid red';
        p4.style.display = 'block'
    }
    else {
        radio1.style.border = '1px solid green';
        p4.style.display = 'none'
    }
    if (select.value == "none") {
        select.style.border = '1px solid red';
        p6.style.display = 'block';
    }
    else {
        p6.style.display = 'none';
    }
    var cunt = 0;
    if (chBox1.checked)
        cunt++;
    if (chBox2.checked)
        cunt++;
    if (chBox3.checked)
        cunt++;
    if (cunt < 2) {

        p5.style.display = 'block'
    }
    else {

        p5.style.display = 'none'
    }

    console.log("you can login");
}
btn2.addEventListener("click", btnReset);
function btnReset() {

    input1.value = "";
    input2.value = "";
    input3.value = "";
    radio1.checked = false;
    radio2.checked = false;
    chBox1.checked = false;
    chBox2.checked = false;
    chBox3.checked = false;
}