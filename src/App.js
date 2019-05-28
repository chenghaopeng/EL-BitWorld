import Screen from "./components/Screen.js";
import Controller from "./components/Controller.js";
import WordScene from "./scenes/WordScene.js";
import ChatScene from "./scenes/ChatScene.js";
import './App.css';

class App {
  scenes = [
    new WordScene("欢迎来到比特世界"),
    new WordScene("异世界的友人，你好，我是你的向导李春，我负责接引每一位远道而来的游客，让他们尽快的适应这里的生活"),
    new WordScene("当然，也会提醒他们"),
    new WordScene("不要做坏事"),
    new ChatScene(require("./resources/sceneimg/chengqu.png"), [
      "为了让你快一点理解比特世界和你所在的世界有什么不同，我决定让时间倒流，让你体验比特世界的发展过程",
      "同时，我会在关键时刻给你一些提醒，让时间更快的流动",
      "但是，如果你更改了历史的发展进程，我会让时间倒流",
      "再次提醒你，不要做坏事"
    ], [0, 0, 0, 0], [require("./resources/personimg/lichun.png")], ["lichun"]),
    new WordScene("一千年前"),
    new ChatScene(require("./resources/sceneimg/yangqun.png"), ["fdfv", "saf", "sfdbfdb"], [0, 1, 0], ["", ""], ["adsf", "VC"]),
    new WordScene("THEEND")
  ];
  screen;
  controller;
  constructor(screenContainer, controllerContainer) {
    this.screen = new Screen(screenContainer, this.scenes);
    this.controller = new Controller(controllerContainer);
    window["app"] = this;
    this.screen.nextScene();
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