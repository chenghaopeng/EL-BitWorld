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
    return this.current < this.count - 1;
  }

  next() {
    this.current++;
  }

  render() {
    const word = this.words[this.current];
    const person = this.person[this.current];
    const pi = this.personimgae[person];
    const pn = person!==-1?this.personname[person]:"你";
    return `
      <div class="scene chatscene" style="background-image: url(${this.background})">
        <img class="person"${person!==-1?` src="${pi}"`:``}>
        <div class="chat">
          <p class="chatname">${pn}</p>
          <p class="chatword">${word}</p>
        </div>
      </div>
    `;
  }
}

export default ChatScene;