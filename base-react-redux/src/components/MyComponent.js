import { Component } from "react";

class MyComponent extends Component {

    state = {
        name: 'Hung',
        address: 'Nha Trang',
        age: 22
    };

    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;