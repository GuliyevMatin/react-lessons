import { Component } from "react";

export function withIntro(GelenKomp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };

      this.handleButton = this.handleButton.bind(this);
    }
    handleButton() {
      this.setState({
        count: this.state.count + 1,
      });
    }
    render() {
      return <GelenKomp handleButton={this.handleButton} count = {this.state.count} />;
    }
  };
}
