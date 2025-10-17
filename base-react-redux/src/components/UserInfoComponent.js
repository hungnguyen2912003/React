import { Component } from "react";

class UserInfo extends Component {
    
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

    handleText = (event) => {
        this.setState ({
            name: event.target.value
        })
    }

    handleAge = (event) => {
        this.setState ({
            age: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>Click me!</button>
                <button onMouseMove={this.handleMouseHover}>Hover me!</button>

                <form onSubmit={this.handleSubmit}>
                    <label>Enter name: </label>
                    <input type="text" onChange={this.handleText} value={this.state.name}/>
                    <label>Enter age: </label>
                    <input type="number" onChange={this.handleAge} value={this.state.age}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default UserInfo;