import { Component } from "react";

class CreateUserComponent extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    }

    handleChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddUser(this.state);
        this.setState({
            name: "",
            email: "",
            phone: ""
        });
    }

    render() {
        return (
            <div className="add-user-container">
                <h4>Add new user</h4>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChangeInput}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChangeInput}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChangeInput}
                            required
                        />
                    </div>
                    <br/>
                    <button type="submit">Add User</button>
                </form>
            </div>
        );
    }
}

export default CreateUserComponent;
