import Component from "../libs/Component.js"

class Screen extends Component{
    scenes = [];
    current = -1;
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
    }
    hasNextFrame() {
        return this.scenes[this.current].hasNext();
    }
    nextFrame() {
        this.scenes[this.current].next();
    }
    render() {
        this.container.innerHTML = this.scenes[this.current].render();
        return ``;
    }
}

export default Screen;