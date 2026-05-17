const gameboard = {
    gameboardArray: [1,2,3,4,5,6,7,8,9],

}


function createPlayer (name, marker) {
    name,
    marker

}

const gameflow = {

}

function pickSpot(index, item) {
    if (gameboard.gameboardArray[index] === "x" |  gameboard.gameboardArray[index] === "o" ) {
        console.log("spot taken, choose another spot");
        console.log(gameboard.gameboardArray);
    } else {
         gameboard.gameboardArray.splice(index, 1, item);
        console.log(gameboard.gameboardArray);
    }
   
}

function evaluateBoard() {
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#finding_all_the_occurrences_of_an_element
    const indices = [];
    console.log(gameboard.gameboardArray);
    let indexArray = gameboard.gameboardArray.indexOf("x");
    while (indexArray !== -1) {
        indices.push(indexArray);
        indexArray = gameboard.gameboardArray.indexOf("x", indexArray + 1);
    }
    console.log(indices);
    // [0, 2, 4]

    }
