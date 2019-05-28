class Scene {
  background
  constructor(bg) {
    this.background = bg;
  }
  render() {
    throw new Error('lifecycle function render should be overrided');
  }
}

export default Scene;