import Component from "../libs/Component.js"

class Controller extends Component {
  render(next) {
    this.container.innerHTML = next?`<p class="nextframe" onclick="app.next();">继续</p>`:``;
    return ``;
  }
}

export default Controller;