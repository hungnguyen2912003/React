import { Component } from "react";

class MyComponent extends Component {

    state = {
        name: "Hung Nguyen"
    }

    handleClickButton = () => {
        console.log(`Thank you for clicked this button <3`);
    }

    render() {
        return (
            <div>
                <span>Hello World. My name is {this.state.name}</span>

                <div>
                    <button onClick={this.handleClickButton}>Click me!</button>
                </div>
            </div>
        )
    }
}

export default MyComponent