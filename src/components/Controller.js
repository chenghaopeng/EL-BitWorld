import Component from "../libs/Component.js"

class Controller extends Component {
  render() {
    this.container.innerHTML = `<p class="nextframe" onclick="app.next();">NEXT</p>`;
    return ``;
  }
}

export default Controller;