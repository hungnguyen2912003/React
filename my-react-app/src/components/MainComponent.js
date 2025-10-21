import { Component } from "react";

class MainComponent extends Component {

    state = {
        name: 'Hưng Nguyễn'
    }

    //DOM Event
    handleCLick = () => {
        console.log(`You clicked this button!`);
    }

    render() {
        return (
            <>
                <div>
                    <h4>My name is {this.state.name}</h4>
                </div>
                
                <div>
                    <button onClick={this.handleCLick}>Click me</button>
                </div>
            </>
        )
    }
}

export default MainComponent