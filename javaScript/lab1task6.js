
var fly = confirm("Do You Fly?");

if (fly) {
    var wild = confirm("Are You Wild?");
    if (wild) {
        console.log("Eagle");
    }
    else {
        console.log("Parrot");

    }
}
else {
    var liveUnderTheSea = confirm("Do You Live Under The Sea?");
    if (liveUnderTheSea) {
        var wild = confirm("Are You Wild?");
        if (wild) {
            console.log("Shark");
        }
        else {
            console.log("Dolphin");
        }
    }
    else {
        var wild = confirm("Are You Wild?");
        if (wild) {
            console.log("lion");
        }


        else {
            console.log("cat");
        }
    }
}