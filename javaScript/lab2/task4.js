var listItem = document.querySelectorAll("p");
var div = document.createElement('div');
for (var i = 0; i < 4; i++) {
    var newItem = document.createElement('a');
    newItem.setAttribute('href', '#');
    newItem.innerHTML = listItem[i].innerText + "<br>";
    console.log(newItem);
    listItem[i].remove();
    div.appendChild(newItem);
}
document.body.appendChild(div)
