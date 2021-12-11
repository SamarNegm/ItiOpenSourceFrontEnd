function testClosure() {
    var myArr = [];
    for (var i = 0; i < 3; i++) {

        myArr.push(
            (
                function () {
                    console.log(j)
                    return i;
                }
            )()
        )
    }


    return myArr;
}




var arr = testClosure()
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])