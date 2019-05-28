import Scene from "../libs/Scene.js";

class WordScene extends Scene {
  words
  constructor(words) {
    super("#000000");
    this.words = words;
  }
  render() {
    return `
      <div class="scene" style="background-color: ${this.background}">
        <p class="word">${this.words}</p>
      </div>
    `;
  }
}

export default WordScene;