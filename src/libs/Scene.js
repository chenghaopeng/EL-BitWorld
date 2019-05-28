class Scene {
  background
  constructor(bg) {
    this.background = bg;
  }

  hasNext() {
    return false;
  }

  next() {
    return false;
  }

  render() {
    throw new Error('lifecycle function render should be overrided');
  }
}

export default Scene;