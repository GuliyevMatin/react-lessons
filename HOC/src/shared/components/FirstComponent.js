import { Component } from "react";
import { withIntro } from "../hoc/withIntro";


 class FirstComponent extends Component {
  render() {
    console.log(this.props);
    return (

        <div className="row">
          <div className="col-md-12">
            <p>{this.props.count}</p>
          <button onClick={this.props.handleButton}>first Button</button>

          </div>
        </div>
   
    );
  }
}

export default withIntro(FirstComponent);