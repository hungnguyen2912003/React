import { Component } from "react";
import CreateUserComponent from "./CreateUserComponent";

class MainComponent extends Component {

    state = {
        name: 'Hưng Nguyễn'
    }

    //DOM Event
    handleCLick = () => {
        console.log(`You clicked this button!`);
    }

    handleRealNameClick = () => {
        this.setState({
            name: 'Bo'
        })
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
                <br/>
                <div>
                    <button onClick={this.handleRealNameClick}>Show my real name</button>
                </div>
                <br/>

                <div>
                    <CreateUserComponent/>
                </div>
            </>
        )
    }
}

export default MainComponent