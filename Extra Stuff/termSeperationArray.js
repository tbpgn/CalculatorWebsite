var initEquation = "1+22341234-319473912*420348/5" // input equation. will be split into an array of terms
var rerun //declare variable rerun. if this is true, equation will run though validator again

function equationValidator(initSplit) {
    rerun = false //sets rerun to false. will change to true if two coinciding numbers are combined
    var initSplitTypes = []; //declares array telling whether or not are numbers
    for (let i = 0; i < initSplit.length; i++) { //for as long as i is less than length of array while i is added every run...
        if (isNaN(initSplit[i]) == true) { //if array at the value of i is not a number
            initSplitTypes.push("Sym"); //add to types array in place of i "sym"
        } else if (isNaN(initSplit[i]) == false) { //else if array at value of i is a number
            initSplitTypes.push("Nbr"); //add to types array in place of i "nbr"
        } else { console.log("Error 001") }; // if i is someone not a number nor a number
    }

    for (let x = 0; x < initSplitTypes.length; x++) {
        if (initSplitTypes[x] == "Nbr") {
            if (initSplitTypes[x] == initSplitTypes[x + 1]) {
                var y = 1
                var combine = initSplit[x].concat(initSplit[x + y])
                initSplit.splice(x, 1, combine);
                initSplit.splice(x + 1, 1, "Dlt");
                initSplitTypes.splice(x + 1, 1, "Dlt")
                rerun = true
            }
        }
    }
    equationResult = initSplit
}
var initEquation = initEquation.replace(/\s/g, '').split('');
equationValidator(initEquation)
var filterDlt = function(val){return val !== "Dlt";};
while (rerun == true) {
    equationResult = equationResult.filter(filterDlt)
    equationValidator(equationResult)
}