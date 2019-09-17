class Entry {
  constructor(props) {
    this.props = props;
  }

  render() {
    return `Hello, ${this.props.word}`;
  }


}

module.exports = Entry;
