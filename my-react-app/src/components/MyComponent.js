import { Component } from "react";

class MyComponent extends Component {

    state = {
        name: "Hung Nguyen"
    }

    handleClickButton = () => {
        console.log(`Thank you for clicked this button <3`);
    }

    handleRealNameButton = () => {
        this.setState({
            name: `Nguyen Khac Duy Hung`
        })
    }

    render() {
        return (
            <div>
                <span>Hello World. My name is {this.state.name}</span>

                <div>
                    <button onClick={this.handleClickButton}>Click me!</button>
                    <button onClick={this.handleRealNameButton}>Show fullname at home</button>
                </div>
            </div>
        )
    }
}

export default MyComponent