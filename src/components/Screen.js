import Component from "../libs/Component.js"

import Scene from "../libs/Scene.js";
import WordScene from "../scenes/WordScene.js";
import ChatScene from "../scenes/ChatScene.js";

class Screen extends Component{
    scenes = [];
    current = -1;
    constructor(container, scenes) {
        super(container);
        this.scenes = scenes;
        current = -1;
    }
    haveNextScene() {
        return current < scenes.length;
    }
    nextScene() {
        current++;
    }
    haveNextFrame() {
        return scenes[current].haveNext();
    }
    nextFrame() {
        scenes[current].next();
    }
    render() {
        return scenes[current].render();
    }
}

export default Screen;