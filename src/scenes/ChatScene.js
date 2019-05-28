import Scene from "../libs/Scene.js";

class ChatScene extends Scene {
  words = []
  person = []
  personimgae = []
  personname = []

  count = 0
  current = -1

  constructor(background, words, person, personimage, personname) {
    super(background);
    this.words = words;
    this.person = person;
    this.personimgae = personimage;
    this.personname = personname;

    this.count = this.words.length;
    this.current = -1;
  }

  hasNext() {
    return this.current < this.count;
  }

  next() {
    this.current++;
  }

  render() {
    const word = this.words[this.current];
    const pi = this.personimgae[this.person[this.current]];
    const pn = this.personname[this.person[this.current]];
    return `
      <div class="scene" style="background-image: url(${this.background})">
        <div class="person" style="background-imgae: url(${pi})"></div>
        <div class="chat">
          <p class="chatname">${pn}</p>
          <p class="chatword">${word}</p>
        </div>
      </div>
    `;
  }
}

export default ChatScene;