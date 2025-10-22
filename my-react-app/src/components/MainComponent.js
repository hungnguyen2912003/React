import { Component } from "react";
import CreateUser from "./CreateUserComponent";
import Display from "./DisplayUserComponent";

//class component
class Main extends Component {

    state = {
        listUsers: [
            { name: 'Hưng Nguyễn', age: 22 },
            { name: 'Trần Bình', age: 25 }
        ]
    }

    handleCreate = (obj) => {
        this.setState({
            listUsers: [...this.state.listUsers, obj]
        })
    }

    handleDelete = (id) => {
        const delList = this.state.listUsers;
        delList.filter((_,i) => i !== id)
        this.setState({
            listUsers: delList
        })
    }

    render(){
        return(
            <div>
                <Display users = {this.state.listUsers} del = {this.handleDelete}/>
                <br/>
                <CreateUser create = {this.handleCreate}/>
            </div>
        )
    }
}

export default Main