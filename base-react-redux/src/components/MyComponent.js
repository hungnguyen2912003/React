import { Component } from "react";

class MyComponent extends Component {

    state = {
        name: 'Hung',
        address: 'Nha Trang',
        age: 22
    };

    handleClick = (event) => {
        console.log(`Clicked me! ${this.state.name}`);

        this.setState({
            name: 'Martijn'
        })
    }

    handleMouseHover = (event) => {
        console.log(`Mouse hovered this button`);
    }

    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}

                <button onClick={this.handleClick}>Click me!</button>
                <button onMouseMove={this.handleMouseHover}>Hover me!</button>
            </div>
        );
    }
}

export default MyComponent;