module.exports = class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    // напишите этот метод сами
    let result = [];
    for (let i = 0; i < this.terrainList.length; i += this.size) {
      let temp = this.terrainList.slice(i, i + this.size).map(field => this.terrainHelper.letterToTerrain(field));
      result.push(temp);
    }
    return result;
  }

  difficultyOfJourney() {
    // напишите этод метод сами
  }
}

