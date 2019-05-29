import Component from "../libs/Component.js"

class Screen extends Component{
    scenes = [];
    current = -1;
    couldNext = true;
    constructor(container, scenes) {
        super(container);
        this.scenes = scenes;
        this.current = -1;
    }
    hasNextScene() {
        return this.current < this.scenes.length - 1;
    }
    nextScene() {
        this.current++;
        this.scenes[this.current].current = -1;
    }
    hasNextFrame() {
        return this.scenes[this.current].hasNext();
    }
    nextFrame() {
        this.scenes[this.current].next();
    }
    backSceneStart() {
        this.scenes[this.current].current = 0;
    }
    backPrevScene() {
        this.current--;
        this.scenes[this.current].current = -1;
    }
    render() {
        this.container.innerHTML = this.scenes[this.current].render();
        this.couldNext = this.container.innerHTML.indexOf("问：") === -1;
        return ``;
    }
}

export default Screen;