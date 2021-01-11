module.exports = class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    const mapSize = this.size;
    const terrainArr = this.terrainList;
    const result = [];
    while (terrainArr.length > 0) {
      let tempArr = [];
      for (let i = 0; i < mapSize; i += 1) {
        tempArr.push(this.terrainHelper.letterToTerrain(terrainArr.shift()));
      }
      result.push(tempArr);
    }
    return result;
  }

  difficultyOfJourney(journey) {
    let mappedTable = this.terrainMap();
    let sum = 0;
    journey.forEach((el, index) => {
      sum += this.terrainHelper.scoreDifficulty(mappedTable[el[0]][el[1]]);
    });
    return sum;
  }
};
