import { Component } from "react";
import CreateUserComponent from "./CreateUserComponent";
import DisplayUserComponent from "./DisplayUserComponent";

class MainComponent extends Component {
    state = {
        listUser: [
            { name: "Nguyễn Hưng", email: "hung@gmail.com", phone: "0123456789" },
            { name: "Đặng Hiệp", email: "hiep@gmail.com", phone: "0987654321" },
        ]
    }

    handleAddUser = (userObj) => {
        this.setState({
            listUser: [...this.state.listUser, userObj]
        });
    }

    handleDeleteUser = (index) => {
        const updatedList = this.state.listUser.filter((_, i) => i !== index);
        this.setState({ listUser: updatedList });
    }

    render() {
        return (
            <div style={{ margin: "20px" }}>
                <h2>Manage Users</h2>
                <CreateUserComponent handleAddUser={this.handleAddUser} />
                <hr />
                <DisplayUserComponent users={this.state.listUser} handleDeleteUser={this.handleDeleteUser}/>
            </div>
        );
    }
}

export default MainComponent;
