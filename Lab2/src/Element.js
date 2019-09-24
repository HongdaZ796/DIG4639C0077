class Element {
  constructor(element) {
    this.element = document.createElement(element);
    console.log('// DEBUG: ');
  }

  render(content) {
    this.element.innerHTML = content;
    document.body.appendChild(this.element);
  }
}

export default Element;
