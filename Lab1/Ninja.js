class Ninja {
  constructor(props) {
    this.props = props;
  }

  render() {
    return `<div>
      <p> ${this.props.name} - ${this.props.age}</p>
    </div>`;
  }
}

module.exports = Ninja;
