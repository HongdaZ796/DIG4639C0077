class Entry {
  constructor(props) {
    this.props = props;
  }

  render() {
    return `<div>
      <h1>${this.props.title}</h1>
      <h4>${this.props.author} - ${this.props.releaseD}</h4>
      <p>${this.props.description}</p>
      </div>`;
  }


}

module.exports = Entry;
