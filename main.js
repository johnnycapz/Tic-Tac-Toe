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
    const indicesOfX = [];
    const indicesOfO = [];
    console.log(gameboard.gameboardArray);
    let indexArrayX = gameboard.gameboardArray.indexOf("x");
    while (indexArrayX !== -1) {
        indicesOfX.push(indexArrayX);
        indexArrayX = gameboard.gameboardArray.indexOf("x", indexArrayX + 1);
    }

    let indexArrayO = gameboard.gameboardArray.indexOf("o");
    while (indexArrayO !== -1) {
        indicesOfO.push(indexArrayO);
        indexArrayO = gameboard.gameboardArray.indexOf("o", indexArrayO + 1);
    }
    console.log(indicesOfX);
    console.log(indicesOfO);
    // [0, 2, 4]
    const winningArray1 = [0 , 1 ,2];
    const winningArray2 = [3 , 4 ,5];
    const winningArray3 = [6 , 7 ,8];
    const winningArray4 = [0 , 3 ,6];
    const winningArray5 = [1 , 4 ,7];
    const winningArray6 = [2 , 5 ,8];
    const winningArray7 = [0 , 4 ,8];
    const winningArray8 = [2 , 4 , 6];
    //https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/ 
    if ((JSON.stringify(indicesOfX) === JSON.stringify(winningArray1))|| (JSON.stringify(indicesOfX) === JSON.stringify(winningArray2)) || (JSON.stringify(indicesOfX) === JSON.stringify(winningArray3)) || (JSON.stringify(indicesOfX) === JSON.stringify(winningArray4)) || (JSON.stringify(indicesOfX) === JSON.stringify(winningArray5)) || (JSON.stringify(indicesOfX) === JSON.stringify(winningArray6)) || (JSON.stringify(indicesOfX) === JSON.stringify(winningArray7)) || (JSON.stringify(indicesOfX) === JSON.stringify(winningArray8))) {
        console.log("Player X Wins");
    } else if ((JSON.stringify(indicesOfO) === JSON.stringify(winningArray1))|| (JSON.stringify(indicesOfO) === JSON.stringify(winningArray2)) || (JSON.stringify(indicesOfO) === JSON.stringify(winningArray3)) || (JSON.stringify(indicesOfO) === JSON.stringify(winningArray4)) || (JSON.stringify(indicesOfO) === JSON.stringify(winningArray5)) || (JSON.stringify(indicesOfO) === JSON.stringify(winningArray6)) || (JSON.stringify(indicesOfO) === JSON.stringify(winningArray7)) || (JSON.stringify(indicesOfO) === JSON.stringify(winningArray8))) {
        console.log("Player O Wins");
    } else {
        console.log("no one wins");
    }

    }


pickSpot(0, "x")
pickSpot(1, "o")
pickSpot(3, "x")
pickSpot(4, "o")
pickSpot(6, "x")

evaluateBoard();
