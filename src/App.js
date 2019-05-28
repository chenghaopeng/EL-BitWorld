import Screen from "./components/Screen.js";
import Controller from "./components/Controller.js";
import WordScene from "./scenes/WordScene.js";
import ChatScene from "./scenes/ChatScene.js";
import './App.css';

class App {
  scenes = [
    new WordScene("wordsssss"),
    new ChatScene("", ["test1", "test2", "test30"], [0, 1, 0], ["", ""], ["mytest", "haha"]),
    new ChatScene("", ["fdfv", "saf", "sfdbfdb"], [0, 1, 0], ["", ""], ["adsf", "VC"]),
    new WordScene("THEEND")
  ];
  screen;
  controller;
  constructor(screenContainer, controllerContainer) {
    this.screen = new Screen(screenContainer, this.scenes);
    this.controller = new Controller(controllerContainer);
    window["app"] = this;
    this.screen.nextScene();
    this.render();
  }
  next() {
    if(this.screen.hasNextFrame()){
      this.screen.nextFrame();
    }
    else if(this.screen.hasNextScene()){
      this.screen.nextScene();
      this.screen.nextFrame();
    }
    this.render();
  }
  render() {
    this.screen.render();
    this.controller.render();
    return ``;
  }
}

export default App;