var arr = ["ahmed", "islam", "sandra", "ali"];
var fNameIndex = Math.floor(Math.random() * 10);
var sNameIndex = Math.floor(Math.random() * 10);
while (sNameIndex == fNameIndex) {
    sNameIndex = Math.floor(Math.random() * 10);
}
console.log(arr[fNameIndex % arr.length]);
console.log(arr[sNameIndex % arr.length]);