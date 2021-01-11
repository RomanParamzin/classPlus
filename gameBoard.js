module.exports = class GameBoard {
  constructor(terrainHelper, terrainList, size) {
    this.terrainHelper = terrainHelper;
    this.terrainList = terrainList;
    this.size = size;
  }

  terrainMap() {
    let terrainMapArray = []
    let counter = 0
    while (counter < this.size * this.size) {
      let length = counter + this.size
      terrainMapArray.push(this.terrainList.slice(counter, length).map((el) => this.terrainHelper.letterToTerrain(el)))
      counter = length
    }
    return terrainMapArray
  }

  difficultyOfJourney(journey) {
    let scoreFinal = 0
    for (let i = 0; i < journey.length; i++) {
      let numberOfArray = journey[i][0]
      let numberOfWord = journey[i][1]
      let a = (this.terrainMap())[numberOfArray][numberOfWord]
      scoreFinal += this.terrainHelper.scoreDifficulty(a)
    }
    return scoreFinal
  }
}
