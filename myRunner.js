const TerrainHelper = require('./terrainHelper')
const GameBoard = require('./gameBoard')

// этот файл мне нужен для проревки работы методов
// создам свои экземпляры

let myHelper;
let myTerrainList;
let boardSize;
let myGameBoard;

myHelper = new TerrainHelper();
myTerrainList = ["W", "W", "P", "P", "F", "M", "L", "L", "L"];
boardSize = 3;
myGameBoard = new GameBoard(myHelper, myTerrainList, boardSize);

const desiredBroard = [
  ["water", "water", "plains"],
  ["plains", "forest", "mountains"],
  ["lava", "lava", "lava"]
];

// консоль-логи
myTerrainList.forEach((field) => {
  let terrain = myHelper.letterToTerrain(field);
  console.log(myHelper.scoreDifficulty(terrain));
});

let result = [];
for (let i = 0; i < myTerrainList.length; i += boardSize) {
  let temp = myTerrainList.slice(i, i + boardSize).map(field => myHelper.letterToTerrain(field));
  result.push(temp);
}

console.log(result);
