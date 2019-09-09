var initEquation = "1 + 22 - 3 / 5 * 178";
var rerun = true

function equationValidator(initSplit) {
    rerun = false
    var initSplitTypes = [];
    console.log(initSplit);
    for (let i = 0; i < initSplit.length; i++) {
        if (isNaN(initSplit[i]) == true) {
            initSplitTypes.push("Sym");
        } else if (isNaN(initSplit[i]) == false) {
            initSplitTypes.push("Nbr");
        } else {
            console.log("Somehow " + initSplit[i] + " is not a number nor a symbol");
        }
    }

    for (let x = 0; x < initSplitTypes.length; x++) {
        if (initSplitTypes[x] == "Sym") {
            console.log(initSplit[x] + " is Sym")
        } else if (initSplitTypes[x] == "Nbr") {
            console.log(initSplit[x] + " is Nbr")
            if (initSplitTypes[x] == initSplitTypes[x + 1]) {
                console.log("next element is Nbr")
                var y = 1
                var combine = initSplit[x].concat(initSplit[x + y])
                console.log("combined elements: " + combine)
                initSplit.splice(x, 1, combine);
                initSplit.splice(x + 1, 1, "Dlt");
                initSplitTypes.splice(x + 1, 1, "Dlt")
                rerun = true
            } else { console.log("next element is not Nbr") }
        } else if (initSplitTypes[x] == "Dlt") {
            console.log("To be Deleted")
        }
    }
    console.log(initSplitTypes);
    console.log(initSplit);
    equationResult = initSplit

}

var initEquation = initEquation.replace(/\s/g, '').split('');
equationValidator(initEquation)

var fil = function(val){
    return val !== "Dlt";
};

while (rerun == true) {
    equationResult = equationResult.filter(fil)
    console.log("no Dlt? " + equationResult)
    equationValidator(equationResult)
}