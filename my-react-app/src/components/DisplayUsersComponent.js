import { Component } from "react";


class DisplayUsersComponent extends Component {
    
    render() {
        const { listUser } = this.props; 
        return (
            <div>
                <h2>List users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listUser.map(user => { 
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <button onClick={() => this.props.delete(user.id)}>Delete</button>
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

export default DisplayUsersComponent