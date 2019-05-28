class Component {
  container
  constructor(container) {
    this.container = container;
  }
  render() {
    throw new Error('lifecycle function render should be overrided');
  }
}

export default Comment;