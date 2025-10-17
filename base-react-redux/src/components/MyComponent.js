import { Component } from "react";
import UserInfo from "./UserInfoComponent";
import DisplayInfo from "./DisplayInfoComponent";

class MyComponent extends Component {

    state = {
        listUser: [
            {id: 1, name: 'Hung Nguyen', age: 22},
            {id: 2, name: 'Hiep Dang', age: 56},
            {id: 3, name: 'Khac Tam', age: 58},
        ],
    }

    handleAddUser = (obj) => {
        this.setState({
            listUser: [...this.state.listUser, obj]
        });
    };

    handleDeleteUser = (id) => {
        const delList = this.state.listUser.filter(user => user.id !== id);
        this.setState({
            listUser: delList
        });
    };

    render(){
        return (
            <>
                <UserInfo 
                    handleAddUser = {this.handleAddUser}
                />
                <DisplayInfo 
                    listUser = {this.state.listUser} 
                    handleDelUser = {this.handleDeleteUser} 
                />
            </>
        );
    }
}

export default MyComponent;