import React, { Component } from "react";

class ReactFormWithRef extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef()
        this.age = React.createRef()
        this.message = React.createRef()
        this.image = React.createRef()

        this.state={form:{
            name:"",
            age:"",
            message:"",
            image:""
        }}
    }
    onSubmit() {
        let name = this.name.current.value;
        let age = this.age.current.value;
        let message = this.message.current.value;
        let image = this.image.current.files[0];
       
        if(!name){
            console.log("name is required");
            return;
        }
        else if(!age){
            console.log("age is required");
            return;
        }
        else if(!message){
            console.log("message is required");
            return;
        }
        else if(!image){
            console.log("image is required");
            return;
        }
        
        let form ={
            name,
            age,
            message,
            image
        }
        this.setState({form});
    
    }
  render() {
    return (
      <div style={{ height: "100%" }} className="d-flex flex-column align-items-center justify-content-center">
        <div className="form-group w-50 mb-3">
          <input type="text" placeholder="name" className="form-control w-100" ref={this.name} />
        </div>
        <div className="form-group w-50 mb-3">
          <input type="number" placeholder="age" className="form-control w-100" ref={this.age} />
        </div>
        <div className="form-group w-50 mb-3">
          <textarea
            className="form-control w-100"
            ref={this.message}
            placeholder="message"
            rows="10"
            column="30"
          ></textarea>
        </div>
        <div className="form-group w-50 mb-3">
            <input type="file" className="form-control w-100" ref={this.image} />
        </div>
        <button onClick={()=>this.onSubmit()} className="btn btn-primary w-50">Send</button>

        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default ReactFormWithRef;
