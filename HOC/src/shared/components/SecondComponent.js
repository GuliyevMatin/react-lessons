import { Component } from "react";
import { withIntro } from "../hoc/withIntro";


class SecondComponent extends Component {
  render() {
    return (
      
        <div className="row">
          <div className="col-md-12">
            
          <p>{this.props.count}</p>
          <button onClick={this.props.handleButton}>Second Button</button>

          </div>
        </div>
     
    );
  }
}

export default withIntro(SecondComponent)