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

  difficultyOfJourney(journey) {
    // напишите этод метод сами
    let result = journey.reduce((accum, el) => {
      return accum + this.terrainHelper.scoreDifficulty(this.terrainMap()[el[0]][el[1]]);
    }, 0);
    return result;
  }
}

