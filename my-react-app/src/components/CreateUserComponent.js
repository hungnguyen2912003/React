import { Component } from "react";

//class component
class CreateUser extends Component {
    
    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.create(this.state);
        this.setState({
            name: '',
            age: ''
        });
    }
    
    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" id="name" onChange={this.handleChange} name="name" value={this.state.name} required/>
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input type="text" id="age" name="age" onChange={this.handleChange} value={this.state.age} required/>
                    </div>

                    <div className="form-group">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser