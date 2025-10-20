import { Component } from "react";


class CreateUserComponent extends Component {
    
    state = {
        name: '',
        age: ''
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.create({
            id: Math.floor((Math.random()*100) + 1),
            name: this.state.name,
            age: this.state.age
        })
    }

    render() {
        return (
            <div>
                <h2>Form add new user</h2>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Enter name: </label>
                        <input type="text" placeholder="Enter your name" onChange={this.handleName} value={this.state.name}/>

                        <label>Enter age: </label>
                        <input type="text" placeholder="Enter your age" onChange={this.handleAge} value={this.state.age}/>

                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUserComponent