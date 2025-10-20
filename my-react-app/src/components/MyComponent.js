import { Component } from "react";

class MyComponent extends Component {

    state = {
        name: "Hung Nguyen"
    };

    render() {
        return (
            <div>Hello World. My name is {this.state.name}</div>
        )
    }
}

export default MyComponent