import { Component } from "react";


class CreateUserComponent extends Component {
    render() {
        return (
            <div class="form-container">
                <h4>Form create new user</h4>
                <form>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email"/>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUserComponent