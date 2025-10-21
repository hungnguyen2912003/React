import { Component } from "react";

class DisplayUserComponent extends Component {
    handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            this.props.handleDeleteUser(index);
        }
    }

    render() {
        const { users } = this.props;

        return (
            <div className="table-container">
                <h4>List users</h4>
                <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <button
                                                onClick={() => this.handleDelete(index)}
                                                style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center" }}>No data</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DisplayUserComponent;
