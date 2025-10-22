import { Component } from "react";


//class component
class Display extends Component {


    handleDelete = (id) => {
        if(window.confirm('Bạn có muốn xóa người dùng này?')){
            this.props.del(id)
        }
    }

    render() {

        const { users } = this.props

        return (
            <div>
                <h2>List users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <button onClick={() => this.handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Display