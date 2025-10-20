import { Component } from "react";
import CreateUserComponent from "./CreateUserComponent";
import DisplayUsersComponent from "./DisplayUsersComponent";

class MyComponent extends Component {

    state = {
        listUser: [
            { id: 1, name: 'Hung Nguyen', age: 22 },
            { id: 2, name: 'Hiep Dang', age: 56 },
            { id: 3, name: 'Khac Tam', age: 58 },
        ],
        firstName: 'Hung Nguyen'
    }

    handleClickButton = () => {
        console.log(`Thank you for clicked this button <3`);
    }

    handleRealNameButton = () => {
        this.setState({
            firstName: `Nguyen Khac Duy Hung`
        })
    }

    handleCreate = (obj) => {
        this.setState({
            listUser: [...this.state.listUser, obj]
        })
    }

    render() {
        return (
            <div>
                <span>Hello World. My name is {this.state.firstName}</span>

                <div>
                    <button onClick={this.handleClickButton}>Click me!</button>
                    <button onClick={this.handleRealNameButton}>Show fullname at home</button>
                </div>

                <CreateUserComponent create = {this.handleCreate}/>

                <DisplayUsersComponent listUser = {this.state.listUser}/>
            </div>
        )
    }
}

export default MyComponent