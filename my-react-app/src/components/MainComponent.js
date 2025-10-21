import { Component } from "react";

class MainComponent extends Component {

    state = {
        name: 'Hưng Nguyễn'
    }

    render() {
        return (
            <div>
                <h4>My name is {this.state.name}</h4>
            </div>
        )
    }
}

export default MainComponent