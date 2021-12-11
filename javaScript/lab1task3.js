var sentence = prompt('Enter Sentence');
var letter = prompt('Enter Letter');
var arr = [];
for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] == letter) {
        arr.push(i);
    }
}
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}