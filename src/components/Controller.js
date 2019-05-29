import Component from "../libs/Component.js"

class Controller extends Component {
  render(next) {
    if (next === 0) {
      this.container.style.display = `table`;
      this.container.innerHTML = `<p class="nextframe" onclick="app.next();">开始</p>`;
    }
    else if (next === 1) {
      this.container.style.display = `table`;
      this.container.innerHTML = `<p class="nextframe" onclick="app.next();">继续</p>`;
    }
    else {
      this.container.style.display = `none`;
      this.container.innerHTML = ``;
    }
    return ``;
  }
}

export default Controller;